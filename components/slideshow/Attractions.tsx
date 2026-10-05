'use client';
import { MOVIES } from "@/app/util/movies";
import Image from "next/image";
import { geo } from "@/app/util/fonts";
import { BsQuestionCircle, } from "react-icons/bs";
import { useState } from "react";
import clsx from "clsx";

export default function Attractions()
{
     const [ attractions, setAttractions ] = useState<number>(0);
     const [ currentMovieIdx, setCurrentMovieIdx ] = useState<number>(0);
     const [ currentMovieImg, setCurrentMovieImg ] = useState<string>("/images/Poster_1.png");

     const currentDate = new Date();
     const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

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
          <div className={ `px-4 pt-10 pb-20 ${ geo.className } relative overflow-hidden` }>
               <div style={ { backgroundImage: `url(${ currentMovieImg })`, backgroundPosition: "center" } } className="w-full h-full scale-1500 blur-sm absolute z-0"></div>
               <h1 className="font-semibold relative z-10">Movies at AMT</h1>
               <div className="flex flex-col justify-center gap-4 relative z-10">
                    <div className="flex justify-center items-center text-xl text-black py-4">
                         <button className={ clsx("w-1/2 text-white underline-offset-4", attractions == 0 && "underline") } onClick={ () => handleSetAttractions("now playing") }>Now Playing</button>
                         <button className={ clsx("w-1/2 text-white underline-offset-4", attractions == 1 && "underline") } onClick={ () => handleSetAttractions("coming soon") }>Coming Soon</button>
                    </div>
               </div>
               { attractions == 0 && MOVIES.filter(movie => movie.releaseDate.getTime() <= currentDate.getTime()).map((movie, idx) =>
               {

                    return <div key={ idx } className="p-4 flex flex-col items-center relative z-10">
                         <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } />
                         <div className="text-center text-xl pt-4 pb-8">
                              <h1 className="font-semibold text-2xl">{ movie.title }</h1>
                              <div className="flex items-center justify-evenly text-neutral-50/50">
                                   <h3>{ movie.movieLength }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                                   <p className="text-neutral-600">|</p>
                                   <h3>{ movie.rating }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                              </div>
                              <p className="text-sm text-neutral-50/30">Released { months[ movie.releaseDate.getMonth() ] } { movie.releaseDate.getDate() }, { movie.releaseDate.getFullYear() }</p>
                         </div>
                         <button className="bg-red-600 text-2xl font-semibold px-8 py-4 rounded-full">Get Tickets</button>
                    </div>;
               }) }
               { attractions == 1 && MOVIES.filter(movie => movie.releaseDate.getTime() > currentDate.getTime()).map((movie, idx) =>
               {

                    return <div key={ idx } className="p-4 flex flex-col items-center relative z-10">
                         <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } />
                         <div className="text-center text-xl pt-4 pb-8">
                              <h1 className="font-semibold text-2xl">{ movie.title }</h1>
                              <div className="flex items-center justify-evenly text-neutral-50/50">
                                   <h3>{ movie.movieLength }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                                   <p className="text-neutral-600">|</p>
                                   <h3>{ movie.rating }</h3>
                                   <BsQuestionCircle className="text-sm text-cyan-500" />
                              </div>
                              <p className="text-sm text-neutral-50/30">Opening { months[ movie.releaseDate.getMonth() ] } { movie.releaseDate.getDate() }, { movie.releaseDate.getFullYear() }</p>
                         </div>
                         <button className="bg-red-600 text-xl font-semibold px-8 py-4 rounded-full">Preorder Tickets</button>
                    </div>;
               }) }
          </div>
     );
}
