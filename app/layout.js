"use client";

import { Poppins, Petrona } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/landing/Navbar";
import NavbarSmall from "./ui/landing/NavbarSmall";
import { useEffect } from "react";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const petrona = Petrona({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.head.appendChild(script);

      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>World Gold</title>
        <link rel="icon" href="/logo.svg" />
        <script src="//code.jivosite.com/widget/cPx2ZkgRrS" async></script>
      </head>
      <body className={poppins.className}>
        <div id="google_translate_element"></div>
        <div>
          <div className="lg:block hidden">
            <Navbar />
          </div>
          <div className="lg:hidden block">
            <NavbarSmall />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
