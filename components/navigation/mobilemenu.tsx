import clsx from "clsx";
import { Menu, XCircle } from "lucide-react";
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
          <nav>
               <button onClick={ handleMenuItemClick } className="flex flex-col justify-center items-center gap-2 z-10 ">
                    { !isOpen ? <Menu size={ 30 } color="#ffaa00" /> : <XCircle size={ 30 } color="#ffaa00" /> }
               </button>

               <ul id="mobile-menu" className={ clsx("absolute left-0 w-full mt-16 bg-neutral-900/30 font-bold text-2xl shadow-lg flex flex-col items-center gap-2 py-4 transition-all duration-500 ease-in-out", isOpen ? "top-0 " : "-top-100") }>
                    <Link href="/movies">See a Movie</Link>
                    <Link href="/theaters">Find a Theater</Link>
                    <Link href="/orders">Food & Drinks</Link>
               </ul>
          </nav>
     );
}
