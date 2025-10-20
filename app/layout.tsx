import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony's Website",
  description: "This is Anthony's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// const gelica = localFont({
//     src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
// })

// const gelicaBold = localFont({
//     src: '../../../../public/Fonts/Gelica/Gelica-Bold.otf',
// })

// const gelicaLight = localFont({
//     src: '../../../../public/Fonts/Gelica/Gelica-Light.otf',
// })