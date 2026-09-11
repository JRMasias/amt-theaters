import clsx from "clsx";
import { Menu, XCircle } from "lucide-react";
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

               <ul id="mobile-menu" className={ clsx("absolute left-0 w-full mt-16 bg-neutral-900/30 text-[#ffaa00] font-bold text-2xl shadow-lg flex flex-col items-center gap-2 py-4 transition-all duration-500 ease-in-out", isOpen ? "top-0 " : "-top-100") }>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Movies</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Order</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact</li>
               </ul>
          </nav>
     );
}
