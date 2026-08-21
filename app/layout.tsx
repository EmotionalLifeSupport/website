import type { Metadata } from "next";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emotionallifesupport.com"),
  title: "Emotional Life Support",
  description: "Private emotional support through separation, divorce and rebuilding after an unhealthy relationship.",
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
      </body>
    </html>
  );
}
