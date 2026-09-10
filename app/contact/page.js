"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);

    setLoading(false);

    if (error) {
      alert("Something went wrong: " + error.message);
    } else {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <main
        style={{
          padding: "60px 20px",
          maxWidth: "700px",
          margin: "0 auto",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ fontSize: "28px" }}>
          Thanks! Your message has been sent. ✅
        </h1>
        <a href="/" style={{ color: "#777" }}>
          &larr; Back to home
        </a>
      </main>
    );
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
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Contact Me</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            fontSize: "16px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
}
