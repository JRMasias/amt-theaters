import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DesktopMenu()
{
     return (
          <div className="flex justify-between items-center text-base px-6 font-semibold">
               <div className="flex justify-center items-center gap-1">
                    <Image src="/images/9.png" alt="AMT logo" width={ 2135 } height={ 736 } className="w-20" />
                    <Link href="">See a Movie</Link>
                    <Link href="">Find a Theater</Link>
                    <Link href="">Food & Drinks</Link>
                    <Link href="">More</Link>
               </div>
               <div className="flex justify-center items-center gap-4">
                    <form className="flex justify-center items-center h-full">
                         <input type="text" name="search" placeholder="Search" className="bg-neutral-800 px-2 py-1 rounded-md" />
                         <Search className="bg-neutral-800 h-9" />
                    </form>
                    <Link href="">See a Movie</Link>
                    <Link href="">Find a Theater</Link>
                    <Link href="">Food & Drinks</Link>
                    <Link href="">More</Link>
               </div>
          </div>
     );
}
