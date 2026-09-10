import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Nikesh Giri",
  description: "Personal website and blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
