'use client';
import { MOVIES } from "@/app/util/movies";
import Image from "next/image";
import { geo } from "@/app/util/fonts";
import { BsQuestionCircle, } from "react-icons/bs";
import { useState } from "react";
import clsx from "clsx";
import { MONTHS } from "@/app/util/months";
import Button from "../ui/Button";

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
          <div className={ `px-4 py-5 md:py-10 ${ geo.className } relative overflow-hidden` }>
               <div style={ { backgroundImage: `url(${ currentMovieImg })`, backgroundPosition: "center" } } className="w-full h-full scale-1500 blur-sm absolute z-0"></div>
               <div className="md:flex justify-between items-center">
                    <h1 className="font-semibold relative z-10 md:text-4xl">Movies at AMT</h1>
                    <div className="flex flex-col justify-center gap-4 relative z-10 w-1/2">
                         <div className="flex justify-center items-center text-xl py-4">
                              <button className={ clsx("w-1/2 text-white underline-offset-4", attractions == 0 && "underline") } onClick={ () => handleSetAttractions("now playing") }>Now Playing</button>
                              <button className={ clsx("w-1/2 text-white underline-offset-4", attractions == 1 && "underline") } onClick={ () => handleSetAttractions("coming soon") }>Coming Soon</button>
                         </div>
                    </div>
               </div>
               { attractions == 0 && MOVIES.filter(movie => movie.releaseDate.getTime() <= currentDate.getTime()).map((movie, idx) =>
               {

                    return <div key={ idx } className="px-5 pt-5 md:pt-15 flex flex-col items-center relative z-10">
                         <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } className="md:w-2/5" />
                         <div className="text-center text-xl pt-4 pb-8">
                              <h1 className="font-semibold text-2xl">{ movie.title }</h1>
                              <div className="flex items-center justify-evenly text-neutral-50/50">
                                   <h3>{ movie.movieLength }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                                   <p className="text-neutral-600">|</p>
                                   <h3>{ movie.rating }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                              </div>
                              <p className="text-sm text-neutral-50/30">Released { MONTHS[ movie.releaseDate.getMonth() ] } { movie.releaseDate.getDate() }, { movie.releaseDate.getFullYear() }</p>
                         </div>
                         <Button size="large">Get Tickets</Button>
                    </div>;
               }) }
               { attractions == 1 && MOVIES.filter(movie => movie.releaseDate.getTime() > currentDate.getTime()).map((movie, idx) =>
               {

                    return <div key={ idx } className="px-5 pt-5 md:pt-15 flex flex-col items-center relative z-10">
                         <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } className="md:w-2/5" />
                         <div className="text-center text-xl pt-4 pb-8">
                              <h1 className="font-semibold text-2xl">{ movie.title }</h1>
                              <div className="flex items-center justify-evenly text-neutral-50/50">
                                   <h3>{ movie.movieLength }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                                   <p className="text-neutral-600">|</p>
                                   <h3>{ movie.rating }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                              </div>
                              <p className="text-sm text-neutral-50/30">Opening { MONTHS[ movie.releaseDate.getMonth() ] } { movie.releaseDate.getDate() }, { movie.releaseDate.getFullYear() }</p>
                         </div>
                         <Button size="large">Preorder Tickets</Button>
                    </div>;
               }) }
          </div>
     );
}
