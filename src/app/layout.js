import Header from '../components/lsyout/Header/Header';
import "./globals.css";
import localFont from "next/font/local";


const vazir = localFont({
    src: [
        {
            path: "../fonts/vazir/Vazir-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../fonts/vazir/Vazir-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/vazir/Vazir.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/vazir/Vazir-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/vazir/Vazir-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-vazir",
    display: "swap",
});

export const metadata = {
    title: {
        default: "ویلاجو | رزرو ویلا و اقامتگاه",
        template: "%s | ویلاجو",
    },
    description:
        "ویلاجو؛ تجربه‌ای متفاوت از رزرو ویلا، اقامتگاه و هتل در مقصد مورد علاقه شما.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`w-full h-full`}>
    <body className={`${vazir.variable} font-vazir`}>
      <Header />
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
