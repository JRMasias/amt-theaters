"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DesktopMenu from "./desktopmenu";
import MobileMenu from "./mobilemenu";
import { Search, Ticket, User2 } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar()
{
     const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

     useEffect(() =>
     {
          const handleScreenWidth = () => setScreenWidth(window.innerWidth);;
          window.addEventListener("resize", handleScreenWidth);
          return () => window.removeEventListener("resize", handleScreenWidth);
     }, []);

     return (
          <header className={ clsx("p-3 w-full sticky top-0 z-50", screenWidth <= 768 ? "bg-neutral-950" : "bg-linear-to-r from-neutral-950 from-80% to-[#815600]") }>
               { screenWidth <= 768 &&
                    <div className="flex items-center justify-between gap-2 text-sm w-full">
                         <div className="flex items-center">
                              <MobileMenu />
                              <Search />
                         </div>
                         <Link href="/">
                              <Image alt="AMT Logo" src="/images/9.png" width={ 2135 } height={ 736 } className="w-20" />
                         </Link>
                         <div className="flex items-center gap-4">
                              <Link href="/theaters" className="flex items-center gap-0.5">
                                   <Ticket />
                                   <p>Showtimes</p>
                              </Link>
                              <Link href="/login">
                                   <User2 className="border-2 rounded-full" />
                              </Link>
                         </div>
                    </div>
               }
               { screenWidth > 768 && <DesktopMenu /> }
          </header>
     );
}