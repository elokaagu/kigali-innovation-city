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
  title: "RiseAfric Unit Trust Fund | Citisquare",
  description:
    "Invest in Rwanda's fastest growing asset classes through the RiseAfric Unit Trust Fund. Expertly managed investments in Africa's rising markets.",
  keywords: [
    "RiseAfric",
    "Citisquare",
    "Unit Trust Fund",
    "Rwanda investment",
    "Africa diaspora investment",
    "Vision City",
    "Kigali Innovation City",
  ],
  openGraph: {
    title: "RiseAfric Unit Trust Fund | Citisquare",
    description:
      "Invest in Rwanda's fastest growing asset classes. Expertly managed investments in Africa's rising markets.",
    type: "website",
    siteName: "Citisquare",
  },
  twitter: {
    card: "summary_large_image",
    title: "RiseAfric Unit Trust Fund | Citisquare",
    description:
      "Invest in Rwanda's fastest growing asset classes. Expertly managed investments in Africa's rising markets.",
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
