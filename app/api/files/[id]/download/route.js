import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function GET(request, { params }) {
  const { id } = await params;

  const { data: fileRow } = await supabaseAdmin
    .from("project_files")
    .select("storage_path, is_public")
    .eq("id", id)
    .single();

  if (!fileRow || fileRow.is_public !== true) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { data, error } = await supabaseAdmin.storage
    .from("project-files")
    .createSignedUrl(fileRow.storage_path, 60);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.redirect(data.signedUrl);
}
