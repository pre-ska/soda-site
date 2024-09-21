import localFont from 'next/font/local';

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css"

 
const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  weight:"100 900",
  display: 'swap',
  variable:"--font-alpino"
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
