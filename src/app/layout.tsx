import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "/src/scss/globals.scss";
import Header from "@/components/header/header";
import cl from "./layout.module.scss";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Turbovskyi",
  description: "Anton Turbovskyi's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={spaceGrotesk.className}>
        <div className={cl.layout}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
