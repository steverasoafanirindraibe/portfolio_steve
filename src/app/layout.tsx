import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from './ClientLayout';
import { TranslationProvider } from "@/hooks/useTranslation";

export const metadata: Metadata = {
  title: "Steve Rasoafanirindraibe - Portfolio",
  description: "Portfolio de Steve Rasoafanirindraibe, développeur full-stack",
    icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png", 
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <TranslationProvider>
          {/* <ClientLayout> */}
            {children}
          {/* </ClientLayout> */}
        </TranslationProvider>

      </body>
    </html>
  );
}