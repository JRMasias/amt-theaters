import type { Metadata } from "next";
import { Cormorant_Garamond, Geologica } from "next/font/google";
import "./globals.css";

const corm = Cormorant_Garamond({
  weight: [ "400", "700" ],
  subsets: [ "latin" ]
});

export const geo = Geologica({
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
      <body className={ `min-h-full ${ corm.className } antialiased flex flex-col text-3xl` }>
        { children }
      </body>
    </html >
  );
}
