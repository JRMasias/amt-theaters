'use client';
import { MOVIES } from "@/app/util/movies";
import Image from "next/image";
import { geo } from "@/app/util/fonts";
import { BsQuestionCircle, } from "react-icons/bs";
import { useState } from "react";
import clsx from "clsx";
import { MONTHS } from "@/app/util/months";
import Button from "@/components/ui/Button";

export default function Attractions()
{
     const [ attractions, setAttractions ] = useState<number>(0);
     const [ currentMovieIdx, setCurrentMovieIdx ] = useState<number>(0);
     const [ currentMovieImg, setCurrentMovieImg ] = useState<string>("/images/Poster_1.png");

     const currentDate = new Date();

     function handleSetAttractions(caller: string) 
     {
          setAttractions(caller === "now playing" ? 0 : 1);
     }

     function handleSetCurrentMovieIdx()
     {
          setCurrentMovieIdx(0);
          setCurrentMovieImg(prev => MOVIES[ currentMovieIdx ].imgSrc[ 0 ]);
     }

     return (
          <div className={ `px-4 py-5 md:py-10 ${ geo.className } overflow-hidden` }>
               <div className="md:flex justify-between items-center">
                    <h1 className="font-semibold relative z-10 text-3xl md:text-4xl">Movies at AMT</h1>
                    <div className="flex flex-col justify-center gap-4 relative z-10 w-full">
                         <div className="flex justify-center items-center text-xl py-4 w-full">
                              <button className={ clsx("w-1/2 text-white underline-offset-4", attractions == 0 && "underline") } onClick={ () => handleSetAttractions("now playing") }>Now Playing</button>
                              <button className={ clsx("w-1/2 text-white underline-offset-4", attractions == 1 && "underline") } onClick={ () => handleSetAttractions("coming soon") }>Coming Soon</button>
                         </div>
                    </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                    { attractions == 0 && MOVIES.filter(movie => movie.releaseDate.getTime() <= currentDate.getTime()).map((movie, idx) =>
                    {

                         return <div key={ idx } className="flex flex-col items-center h-113">
                              <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } />
                              <div className="text-lg py-4">
                                   <h1 className="font-semibold text-lg">{ movie.title }</h1>
                                   <div className="flex items-center justify-evenly text-neutral-50/50">
                                        <h3 className="text-base">{ movie.movieLength }</h3>
                                        <BsQuestionCircle className="text-xs text-cyan-500" />
                                        <p className="text-neutral-600">|</p>
                                        <h3 className="text-base">{ movie.rating }</h3>
                                        <BsQuestionCircle className="text-xs text-cyan-500" />
                                   </div>
                                   <p className="text-xs text-neutral-50/30">Released { MONTHS[ movie.releaseDate.getMonth() ] } { movie.releaseDate.getDate() }, { movie.releaseDate.getFullYear() }</p>
                              </div>
                              <Button size="md">Get Tickets</Button>
                         </div>;
                    }) }
               </div>
               <div className="grid grid-cols-2 gap-4">
                    { attractions == 1 && MOVIES.filter(movie => movie.releaseDate.getTime() > currentDate.getTime()).map((movie, idx) =>
                    {

                         return <div key={ idx } className="flex flex-col items-center h-113">
                              <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } />
                              <div className="text-lg py-4">
                                   <h1 className="font-semibold text-lg">{ movie.title }</h1>
                                   <div className="flex items-center justify-evenly text-neutral-50/50">
                                        <h3 className="text-base">{ movie.movieLength }</h3>
                                        <BsQuestionCircle className="text-xs text-cyan-500" />
                                        <p className="text-neutral-600">|</p>
                                        <h3 className="text-base">{ movie.rating }</h3>
                                        <BsQuestionCircle className="text-xs text-cyan-500" />
                                   </div>
                                   <p className="text-xs text-neutral-50/30">Opening { MONTHS[ movie.releaseDate.getMonth() ] } { movie.releaseDate.getDate() }, { movie.releaseDate.getFullYear() }</p>
                              </div>
                              <Button size="md">Get Tickets</Button>
                         </div>;
                    }) }
               </div>
          </div>
     );
}
