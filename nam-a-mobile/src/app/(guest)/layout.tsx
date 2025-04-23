import type { Metadata } from "next";
import { Mulish, Raleway } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminFloatingBubble from "@/components/layout/AdminFloatingBubble";
// import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { headers } from "next/headers";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Nam Á Mobile - Sửa chữa điện thoại chuyên nghiệp",
  description: "Dịch vụ sửa chữa điện thoại, laptop, tablet chuyên nghiệp tại TP.HCM",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get('x-next-url');
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <html lang="vi">
      <body
        className={`${raleway.variable} ${mulish.variable} antialiased`}
      >
        {!isAdmin && <Header />}
        <main className="min-h-screen">
          <div className='h-[44px] container mx-auto'></div>


          {children}
        </main>
        <Footer />
        <AdminFloatingBubble />
      </body>
    </html>
  );
}
