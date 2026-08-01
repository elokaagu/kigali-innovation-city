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
  title: "Kigali Innovation City | Investment Opportunity",
  description:
    "Kigali Innovation City — the Digital Heart of Africa. A 62-hectare mixed-use development offering world-class investment opportunities in Rwanda.",
  keywords: [
    "Kigali Innovation City",
    "KIC",
    "Rwanda investment",
    "Africa innovation",
    "real estate Rwanda",
  ],
  openGraph: {
    title: "Kigali Innovation City – Investment Opportunity",
    description:
      "Invest in Rwanda's flagship innovation hub. 62 hectares of mixed-use development in the Digital Heart of Africa.",
    type: "website",
    siteName: "Kigali Innovation City",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kigali Innovation City – Investment Opportunity",
    description:
      "Invest in Rwanda's flagship innovation hub. 62 hectares of mixed-use development in the Digital Heart of Africa.",
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
