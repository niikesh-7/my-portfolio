import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function getPublicFiles(projectSlug) {
  const { data, error } = await supabaseAdmin
    .from("project_files")
    .select("*")
    .eq("project_slug", projectSlug)
    .eq("is_public", true)
    .order("uploaded_at", { ascending: false });

  if (error) return [];
  return data;
}
