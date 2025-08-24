import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Susee Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}