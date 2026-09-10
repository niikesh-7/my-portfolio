import { supabase } from "../../../lib/supabaseClient";

export default async function BlogPost({ params }) {
  const { id } = await params;

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    return <main style={{ padding: "60px 20px" }}>Blog not found.</main>;
  }

  return (
    <main
      style={{
        padding: "60px 20px",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <a href="/blog" style={{ color: "#777", textDecoration: "none" }}>
        &larr; Back to blogs
      </a>
      <h1 style={{ fontSize: "32px", margin: "20px 0 5px" }}>{post.title}</h1>
      <p style={{ color: "#777", marginBottom: "30px" }}>
        by {post.author_email} ·{" "}
        {new Date(post.created_at).toLocaleDateString()}
      </p>
      <p
        style={{ fontSize: "18px", lineHeight: "1.7", whiteSpace: "pre-wrap" }}
      >
        {post.content}
      </p>
    </main>
  );
}
