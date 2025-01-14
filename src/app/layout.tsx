import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";

import "@/styles/typography.css";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر موون",
  description: "پلتفرم جامع پزشکی و رزرو نوبت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
