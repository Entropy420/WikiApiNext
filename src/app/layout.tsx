import type { Metadata } from "next";
import "./global.scss";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Wiki Rocket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
