import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { bitter, jbMono, nunito } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Arhum's Portfolio",
  description: "online resume and various links I have to offer",
  keywords: ["Software Engineer"],
  authors: [{ name: "Arhum", url: "https://arhm.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arhm.dev",
    title: "Arhum | YET ANOTHER PORTFOLIO",
    description: "online resume and various links I have to offer",
    siteName: "Arhum's Portfolio",
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
