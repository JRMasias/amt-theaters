import { ADLIST } from "@/app/util/adlist";
import Image from "next/image";

export default function Adlist()
{
     return (
          <div className="flex flex-col justify-center items-center gap-8">
               { ADLIST.map((ad, idx) =>
               {

                    return (
                         <div key={ idx } className="p-4 flex flex-col justify-center items-start gap-3">
                              <Image src={ ad.img } alt="" width={ 1448 } height={ 1086 } />
                              <h1 className="font-semibold">{ ad.caption }</h1>
                              <p className="text-xl">{ ad.description }</p>
                              <button className="bg-red-600 text-xl font-semibold px-6 py-3 rounded-full">{ ad.category === "food" ? "Order Now" : "Get Tickets" }</button>
                         </div>
                    );
               }) }
               {/* end mapped */ }
          </div>
     );
}
