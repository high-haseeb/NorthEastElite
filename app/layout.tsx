import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "North East Elite Pedal",
  description: "made by high-haseeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
