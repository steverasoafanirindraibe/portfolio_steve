import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Steve Rasoafanirindraibe - Portfolio",
  description: "Portfolio de Steve Rasoafanirindraibe, développeur full-stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}