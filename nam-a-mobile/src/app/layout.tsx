import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Nam Á Mobile - Sửa chữa điện thoại chuyên nghiệp",
  description: "Dịch vụ sửa chữa điện thoại, laptop, tablet chuyên nghiệp tại TP.HCM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          <div className='pt-[44px] container mx-auto'> <Breadcrumbs /></div>


          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
