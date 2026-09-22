"use client";
import clsx from "clsx";
import { Menu, Search, Ticket, User2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileMenu()
{
     const [ isOpen, setIsOpen ] = useState(false);

     useEffect(() =>
     {
     }, []);

     function handleMenuItemClick()
     {
          setIsOpen((prev) => !prev);
     }

     return (
          <header className="p-3 w-full sticky top-0 z-50 bg-neutral-950 lg:hidden">
               <div className="flex items-center justify-between gap-2 text-sm w-full">
                    <div className="flex items-center">
                         <nav>
                              <button onClick={ handleMenuItemClick } className="flex flex-col justify-center items-center gap-2 z-10 ">
                                   { !isOpen ? <Menu size={ 30 } color="#ffaa00" /> : <XCircle size={ 30 } color="#ffaa00" /> }
                              </button>

                              <ul id="mobile-menu" className={ clsx("absolute left-0 w-full mt-16 bg-neutral-900/30 font-bold text-2xl shadow-lg flex flex-col items-center gap-2 py-4 transition-all duration-500 ease-in-out", isOpen ? "top-0 " : "-top-100") }>
                                   <Link href="/movies">See a Movie</Link>
                                   <Link href="/theaters">Find a Theater</Link>
                                   <Link href="/orders">Food & Drinks</Link>
                                   <Link href="/orders">VIP</Link>
                              </ul>
                         </nav>
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
          </header>
     );
}
