import { BsQuestionCircle } from "react-icons/bs";
import { MOVIES } from "../util/movies";
import { MONTHS } from "../util/months";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function movies()
{
     const currentDate = new Date();

     return (
          <div className="flex flex-col items-center justify-center">
               { MOVIES.map((movie, idx) =>
               {
                    return <div key={ idx } className="px-5 py-5 flex flex-col items-center relative z-10">
                         <Link href={ `/movies/${ movie.title.replace(/\s+/g, "-").toLowerCase() }` }>
                              <Image src={ movie.imgSrc[ 0 ] } alt="" width={ 1024 } height={ 1536 } />
                         </Link>
                         <div className="text-center text-xl py-4 pb-4">
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
                         <Button size="large">{ movie.releaseDate.getTime() < currentDate.getTime() ? "Get Tickets" : "Pre-Order" }</Button>
                    </div>;
               }) }
          </div>
     );
}
