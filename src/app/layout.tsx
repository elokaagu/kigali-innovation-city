import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { COMPANY_NAME } from "@/data/company";

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
  title: `${COMPANY_NAME} | The Apex · Kigali Tech Tower`,
  description:
    "US$28M GreenTech Tower at KIC main entrance. Knight Frank validated $40.7M. Real estate investment consultancy by Citisquare Africa.",
  keywords: [
    "Citisquare Africa",
    "The Apex",
    "Kigali Tech Tower",
    "Kigali Innovation City",
    "GreenTech Tower",
    "RDB Free Trade Zone",
    "Knight Frank",
    "Africa real estate investment",
  ],
  openGraph: {
    title: `${COMPANY_NAME} | The Apex — East Africa's Premier Technology Investment Address`,
    description:
      "US$28M mixed-use development at KIC main entrance. $40.7M Knight Frank valuation. SPV · REIT-ready · ESG-linked.",
    type: "website",
    siteName: COMPANY_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | The Apex · Kigali Tech Tower`,
    description:
      "US$28M GreenTech Tower at KIC main entrance. Knight Frank validated $40.7M projected value at completion.",
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
