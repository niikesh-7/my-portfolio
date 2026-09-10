export default function Home() {
  return (
    <main
      style={{
        padding: "60px 20px",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Hi, I'm Nikesh Giri 👋
      </h1>
      <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
        Welcome to my personal website. I write blogs here, and others can too.
        Feel free to look around, read something interesting, or say hello.
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
        <a
          href="/blog"
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Read Blogs
        </a>
        <a
          href="/contact"
          style={{
            padding: "10px 20px",
            border: "1px solid black",
            borderRadius: "8px",
            textDecoration: "none",
            color: "black",
          }}
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
