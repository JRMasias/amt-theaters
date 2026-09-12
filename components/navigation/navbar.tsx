"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DesktopMenu from "./desktopmenu";
import MobileMenu from "./mobilemenu";
import { Search, Ticket, User2 } from "lucide-react";

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
          <header className="p-3 w-full sticky top-0 z-50 bg-neutral-950">
               { screenWidth <= 768 &&
                    <div className="flex items-center justify-between gap-2 text-sm w-full">
                         <div className="flex items-center">
                              <MobileMenu />
                              <Search />
                         </div>
                         <div>
                              <Image alt="AMT Logo" src="/images/9.png" width={ 2135 } height={ 736 } className="w-20" />
                         </div>
                         <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                   <Ticket />
                                   <p>Showtimes</p>
                              </div>
                              <User2 className="border-2 rounded-full" />
                         </div>
                    </div>
               }
               { screenWidth > 768 && <></> }
          </header>
     );
}