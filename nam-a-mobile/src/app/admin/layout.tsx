import AdminFooter from "./components/AdminFooter";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import "../globals.css";
import { Metadata, Viewport } from 'next';
import { Raleway, Mulish } from "next/font/google"; // re-import fonts

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400","500", "700"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: 'Quản trị viên - Nam Á Mobile',
  description: 'Trang quản trị hệ thống Nam Á Mobile',
  keywords: ['quản trị', 'admin', 'nam á mobile', 'hệ thống quản lý'],
  robots: 'noindex, nofollow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${raleway.variable} ${mulish.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <div className="flex h-screen overflow-hidden">
          <AdminSidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <AdminHeader />
            <main className="flex-1 overflow-y-auto ">
              <div className="mx-auto h-full ">
                  {children}
              </div>
            </main>
            <AdminFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
