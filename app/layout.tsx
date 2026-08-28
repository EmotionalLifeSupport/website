import type { Metadata } from "next";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import CookieConsent from "./components/CookieConsent";
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "./lib/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emotionallifesupport.com"),
  title: "Emotional Support Through Divorce | Emotional Life Support",
  description:
    "Calm, independent support while you navigate divorce and rebuild your life afterwards. Online across England and Wales and face-to-face in Bournemouth, Christchurch and Poole.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    siteName: "Emotional Life Support",
    title: "Emotional Support Through Divorce | Emotional Life Support",
    description:
      "Calm, independent support while you navigate divorce and rebuild your life afterwards.",
    images: [
      {
        url: "/social-share-chair-v1.png",
        width: 1200,
        height: 630,
        alt: "A comfortable blue chair beside a cup of tea and a green plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Support Through Divorce | Emotional Life Support",
    description:
      "Calm, independent support while you navigate divorce and rebuild your life afterwards.",
    images: ["/social-share-chair-v1.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const hostname = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();

  if (hostname === "www.emotionallifesupport.com") {
    permanentRedirect("https://emotionallifesupport.com");
  }

  return (
    <html lang="en-GB">
      <body>
        {children}
        <CookieConsent googleAnalyticsId={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
