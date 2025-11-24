import type { Metadata } from "next";
import "./globals.css";
import ModernAlert from '../components/ModernAlert';



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
      <body>
        {children}
        <ModernAlert />
      </body>
    </html>
  );
}
