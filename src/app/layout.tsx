import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Steve_Rasoafanirindraibe",
}
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" >
      <body

      >
        {children}
      </body>
    </html>
  );
}
