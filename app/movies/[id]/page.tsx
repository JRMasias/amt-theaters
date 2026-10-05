"use client";

import { useParams } from "next/navigation";
import { MOVIES } from "@/app/util/movies";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { MONTHS } from "@/app/util/months";
import { BsQuestionCircle } from "react-icons/bs";
import Attractions from "@/components/slideshow/Attractions";

export default function MoviesById()
{
     const { id } = useParams();
     return (
          <main className="w-full">
               <div className="w-full relative">
                    <div className="h-100 w-full lg:h-160 relative">
                         <Image src={ MOVIES[ 0 ].imgSrc[ 1 ] } alt={ MOVIES[ 0 ].title } width={ MOVIES[ 0 ].imgWidths[ 1 ] } height={ MOVIES[ 0 ].imgHeights[ 1 ] } className="object-cover object-top w-full max-h-full md:hidden" />
                         <Image src={ MOVIES[ 0 ].imgSrc[ 2 ] } alt={ MOVIES[ 0 ].title } width={ MOVIES[ 0 ].imgWidths[ 2 ] } height={ MOVIES[ 0 ].imgHeights[ 2 ] } className="hidden object-cover object-top w-full max-h-full md:flex xl:hidden" />
                         <Image src={ MOVIES[ 0 ].imgSrc[ 3 ] } alt={ MOVIES[ 0 ].title } width={ MOVIES[ 0 ].imgWidths[ 3 ] } height={ MOVIES[ 0 ].imgHeights[ 3 ] } className="hidden object-cover object-top w-full max-h-full xl:flex" />
                    </div>
                    <div className="absolute bottom-10 left-5 lg:bottom-15 lg:left-1/8">
                         <h1 className="text-white text-5xl font-semibold pb-2 text-shadow">{ MOVIES[ 0 ].title }</h1>
                         <Button>Get Tickets</Button>
                    </div>
               </div>
               {/* Movie info */ }
               <div className="py-10 px-2">
                    <div className="flex flex-nowrap gap-5 pb-3">
                         <Image src={ MOVIES[ 0 ].imgSrc[ 0 ] } alt={ MOVIES[ 0 ].title } width={ MOVIES[ 0 ].imgWidths[ 0 ] } height={ MOVIES[ 0 ].imgHeights[ 0 ] } className="w-1/2 border-4 border-white" />
                         <div className="text-base">
                              <h3 className="pb-4">{ MOVIES[ 0 ].movieHours } H { MOVIES[ 0 ].movieMinutes } MIN <BsQuestionCircle className="inline-block text-xs text-cyan-500 mb-2" /> | { MOVIES[ 0 ].rating } <BsQuestionCircle className="inline-block text-xs text-cyan-500 mb-2" /></h3>
                              <p>{ MONTHS[ MOVIES[ 0 ].releaseDate.getMonth() ] } { MOVIES[ 0 ].releaseDate.getDate() }, { MOVIES[ 0 ].releaseDate.getFullYear() }</p>
                         </div>
                    </div>
                    <p className="text-base">{ MOVIES[ 0 ].description }</p>
                    <div className="pt-10">
                         <h3 className="text-2xl font-semibold">Cast & Crew</h3>
                         { MOVIES[ 0 ].cast.map((castMember, index) => (
                              <div key={ index } className="py-3">
                                   <p className="text-xl">{ castMember.name }</p>
                                   <p className="text-sm text-gray-500">{ castMember.role }</p>
                              </div>
                         )) }
                    </div>
               </div>
               <Attractions />
          </main>
     );
}
