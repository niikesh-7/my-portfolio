import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal website and blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            display: "flex",
            gap: "25px",
            padding: "20px 40px",
            borderBottom: "1px solid #eee",
            fontFamily: "sans-serif",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
          <a href="/blog" style={{ textDecoration: "none", color: "black" }}>
            Blog
          </a>
          <a href="/contact" style={{ textDecoration: "none", color: "black" }}>
            Contact
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
