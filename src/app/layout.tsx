import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { COMPANY_BIO_SHORT, COMPANY_NAME, COMPANY_TAGLINE } from "@/data/company";

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
  title: `${COMPANY_NAME} | Real Estate Investment Consultancy`,
  description: COMPANY_BIO_SHORT,
  keywords: [
    "Citisquare Africa",
    "real estate investment consultancy",
    "Africa real estate",
    "project origination",
    "real estate structuring",
    "Nigeria real estate",
    "Kigali Innovation City",
    "institutional real estate",
  ],
  openGraph: {
    title: `${COMPANY_NAME} | Real Estate Investment Consultancy`,
    description: COMPANY_TAGLINE,
    type: "website",
    siteName: COMPANY_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Real Estate Investment Consultancy`,
    description: COMPANY_TAGLINE,
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
