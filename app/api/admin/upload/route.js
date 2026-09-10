import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../../lib/checkAdmin";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(request) {
  const authorized = await isAdmin(request);
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const projectSlug = formData.get("project_slug");
  const description = formData.get("description");
  const isPublic = formData.get("is_public") === "true";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const storagePath = projectSlug + "/" + Date.now() + "-" + file.name;

  const { error: uploadError } = await supabaseAdmin.storage
    .from("project-files")
    .upload(storagePath, buffer, { contentType: file.type });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { error: dbError } = await supabaseAdmin.from("project_files").insert([
    {
      project_slug: projectSlug,
      file_name: file.name,
      file_type: file.type || "unknown",
      file_size: file.size,
      description: description,
      storage_path: storagePath,
      is_public: isPublic,
    },
  ]);

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
