import Link from "next/link";
import { THEATERS } from "../util/theaters";

export default function theaters()
{
     return (
          <div className="px-4 py-5">
               <h1 className="text-3xl font-bold pb-2">Find a Theater</h1>
               <input type="text" placeholder="Search by city or state..." className="text-lg border border-gray-300 rounded-md px-2 py-1 w-full" />
               <div className="py-5">
                    <h1 className="border-b">All Theaters</h1>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                         { THEATERS.map(theater =>
                         {
                              return (
                                   <Link key={ theater.id } href={ `/theaters/${ theater.id }` } className="py-2 text-base text-blue-500 focus:underline hover:underline">
                                        { theater.city }, { theater.state }
                                   </Link>
                              );
                         }) }
                    </div>
               </div>
          </div>
     );
}
