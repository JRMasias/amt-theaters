"use client";
import { geo } from "@/app/util/fonts";
import Image from "next/image";

export default function Slideshow()
{

     return (
          <section className="relative">
               <div className="w-full h-100 relative md:hidden">
                    <Image src="/images/movie_2_4-3.png" alt="" width={ 1448 } height={ 1086 } className="h-full object-cover" />
                    <div className="w-full h-full absolute top-0 bg-linear-to-b md:bg-linear-to-l from-transparent to-neutral-950 to-65% flex flex-col justify-end items-center">
                         <div className={ `w-full max-w-3xl flex flex-col justify-start self-start px-8 pb-20 ${ geo.className }` }>
                              <h1 className="font-semibold text-xl md:text-3xl 2xl:text-5xl pb-2">Few Words For Caption</h1>
                              <p className="text-base md:text-xl lg:text-2xl">A super quick and brief description of the film. A second sentence describing, offering tickets, or saying &quot;Starring actorman&quot;.</p>
                         </div>
                    </div>
                    <div className="text-white pb-3 absolute bottom-0 left-1/2 -translate-x-11.5">Buttons</div>
               </div>


               <div className="w-full hidden md:flex justify-end h-100">
                    <div className="max-w-lg flex flex-col justify-end items-center">
                         <div className={ `w-full flex flex-col justify-center px-4 pb-15 ${ geo.className }` }>
                              <h1 className="font-semibold text-3xl pb-2">Few Words For Caption</h1>
                              <p className="text-xl">A super quick and brief description of the film. A second sentence describing, offering tickets, or saying &quot;Starring actorman&quot;.</p>
                         </div>
                    </div>
                    <div className="relative max-w-7xl">
                         <Image src="/images/movie_2_21-9.png" alt="" width={ 1916 } height={ 821 } className="object-cover h-full" />
                         <div className="absolute top-0 right-0 h-full w-full bg-linear-to-r from-neutral-950 from-10% to-transparent"></div>
                    </div>
                    <div className="text-white pb-3 absolute bottom-0 left-1/2 -translate-x-11.5">Buttons</div>
               </div>
          </section>
     );
}
