import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../../../lib/checkAdmin";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function PATCH(request, { params }) {
  const authorized = await isAdmin(request);
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const { error } = await supabaseAdmin
    .from("project_files")
    .update({ is_public: body.is_public })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request, { params }) {
  const authorized = await isAdmin(request);
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const { data: fileRow } = await supabaseAdmin
    .from("project_files")
    .select("storage_path")
    .eq("id", id)
    .single();

  if (fileRow) {
    await supabaseAdmin.storage
      .from("project-files")
      .remove([fileRow.storage_path]);
  }

  const { error } = await supabaseAdmin
    .from("project_files")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
