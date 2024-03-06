import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/general/NavBar/NavBar";
import Divider from "@/components/general/Dividers/Divider";
import Footer from "@/components/general/Footer/Footer";
import SideBar from "@/components/general/SideBar/SideBar";
import Header from "@/components/general/Header/Header";

//const inter = Inter({ subsets: ["latin"] });
const splieSans = Spline_Sans({subsets: ["latin"], weight: ["300", "400", "500", "600", "700"]})

export const metadata: Metadata = {
  title: "GameDevCo",
  description: "Video game development services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={splieSans.className}>
        <Header/>
        <Divider/>
        {children}
        
        <Footer/>
      
        </body>
    </html>
  );
}
