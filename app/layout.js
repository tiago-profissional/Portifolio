import "@css/plugins/bootstrap-grid.css";
import { Jost } from "next/font/google";

import "@css/plugins/magnific-popup.css";
import "@css/plugins/swiper.min.css";
import "@fonts/font-awesome/css/all.min.css";

import "@css/style.css";
import "./globals.css";

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Jiraya Tivi - Web Developer Portfolio",
  description:
    "Personal portfolio with React, PHP, WordPress, fullstack and UI projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="mil-custom-scroll">{children}</body>
    </html>
  );
}