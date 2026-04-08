import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { bitter, jbMono, nunito } from "@/config/fonts";
import { SITE_DATA } from "@/config/data/socials";

export const metadata: Metadata = {
  title: SITE_DATA.site_title,
  description: SITE_DATA.site_description,
  keywords: ["Software Engineer"],
  authors: [{ name: SITE_DATA.fname, url: SITE_DATA.site_url }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_DATA.site_url,
    title: SITE_DATA.og.t,
    description: SITE_DATA.site_description,
    siteName: SITE_DATA.site_title,
    images: [
      {
        url: `${SITE_DATA.site_url}/${SITE_DATA.og.i.filename}`,
        width: 1200,
        height: 630,
        alt: SITE_DATA.og.i.fb,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`min-h-screen text-foreground bg-background antialiased
            ${nunito.variable}
            ${bitter.variable}
            ${jbMono.variable}
          `
        }
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-full bg-gray-100 pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
