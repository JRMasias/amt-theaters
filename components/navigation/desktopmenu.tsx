import { Search, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DesktopMenu()
{
     return (
          <div className="flex justify-between items-center text-base xl:px-6 font-semibold">
               <div className="flex justify-center items-center gap-3">
                    <Link href="/">
                         <Image src="/images/9.png" alt="AMT logo" width={ 2135 } height={ 736 } className="w-20" />
                    </Link>
                    <Link href="/movies">See a Movie</Link>
                    <Link href="/theaters">Find a Theater</Link>
                    <Link href="/orders">Food & Drinks</Link>
               </div>
               <div className="flex justify-center items-center gap-4">
                    <form className="flex justify-center items-center bg-neutral-800 rounded-md px-2 py-1">
                         <input type="text" name="search" placeholder="Search" className="bg-neutral-800" />
                         <Search className="h-5 text-neutral-500 cursor-pointer" />
                    </form>
                    <Link href="/theaters" className="flex items-center gap-0.5">
                         <Ticket />
                         <p>Showtimes</p>
                    </Link>
                    <Link href="/login">Sign In</Link>
                    <Link href="/vip">VIP</Link>
               </div>
          </div>
     );
}
