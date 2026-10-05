import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: [ "400", "700" ],
  subsets: [ "latin" ]
});

export const metadata: Metadata = {
  title: "AMT Theaters",
  description: "A fully functional fake movie theater web app",
};

export default function RootLayout({ children }: LayoutProps<"/">)
{
  return (
    <html lang="en">
      <body className={ `min-h-full ${ poppins.className } antialiased flex flex-col text-2xl` }>
        <Navbar />
        { children }
        <Footer />
      </body>
    </html >
  );
}
