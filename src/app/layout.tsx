import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://citisquare-kigali-connect-main.vercel.app"
  ),
  title: "Citisquare | Africa's Investment Platform",
  description:
    "Citisquare connects global capital to Africa's highest-impact development opportunities. Featuring Kigali Innovation City — a 62-hectare mixed-use innovation hub in Rwanda.",
  keywords: [
    "Citisquare",
    "Africa investment",
    "Kigali Innovation City",
    "KIC",
    "Rwanda investment",
    "real estate Africa",
  ],
  openGraph: {
    title: "Citisquare – Africa's Investment Platform",
    description:
      "Connecting global capital to Africa's highest-impact opportunities. Featuring Kigali Innovation City — Rwanda's flagship innovation hub.",
    type: "website",
    siteName: "Citisquare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citisquare – Africa's Investment Platform",
    description:
      "Connecting global capital to Africa's highest-impact opportunities. Featuring Kigali Innovation City — Rwanda's flagship innovation hub.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
