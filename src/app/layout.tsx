import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaseLens — Judicial Intelligence & Resolution Platform",
  description: "Indian court precedent retrieval and time-to-resolution prediction platform. Decision-support tool, not legal advice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#fcfbf9] text-[#171a1d]">{children}</body>
    </html>
  );
}
