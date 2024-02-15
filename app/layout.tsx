import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

import { MainContainer, Main } from "./Styles";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Catalog phone",
  description: "powered by Oleh Nadiein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={roboto.className}>
          <MainContainer>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </MainContainer>
        </body>
      </ThemeRegistry>
    </html>
  );
}
