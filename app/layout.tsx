import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarthak Arya — Full-Stack Developer",
  description:
    "Full-stack developer who ships live products — building across software, full-stack, and product.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
