import { supabase } from "../../lib/supabaseClient";

export default async function BlogList() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main
      style={{
        padding: "60px 20px",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Blogs</h1>

      <a
        href="/blog/write"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        + Write a Blog
      </a>

      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            style={{ borderBottom: "1px solid #eee", padding: "20px 0" }}
          >
            <a
              href={`/blog/${post.id}`}
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              {post.title}
            </a>
            <p style={{ color: "#777", fontSize: "14px", marginTop: "5px" }}>
              by {post.author_email} ·{" "}
              {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p style={{ color: "#777" }}>
          No blogs yet. Be the first to write one!
        </p>
      )}
    </main>
  );
}
