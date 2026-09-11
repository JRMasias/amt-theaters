"use client";

import { useState, useEffect } from "react";
import DesktopMenu from "./desktopmenu";
import MobileMenu from "./mobilemenu";

export default function Navbar()
{
     const [ screenWidth, setScreenWidth ] = useState(0);

     useEffect(() =>
     {
          const handleScreenWidth = () => setScreenWidth(window.innerWidth);;
          window.addEventListener("resize", handleScreenWidth);
          return () => window.removeEventListener("resize", handleScreenWidth);
     }, []);

     return (
          <header>
               { screenWidth > 768 ? <DesktopMenu /> : <MobileMenu /> }
          </header>
     );
}