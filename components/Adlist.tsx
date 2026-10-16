import { ADLIST } from "@/app/util/adlist";
import Image from "next/image";
import Button from "./ui/Button";
import clsx from "clsx";

export default function Adlist()
{
     return (
          <div className="flex flex-col justify-center items-center">
               { ADLIST.map((ad, idx) =>
               {
                    return (
                         <div key={ idx } className={ clsx("px-4 py-5 md:py-30 flex flex-col md:flex-row justify-center items-start gap-3 md:gap-10 fixed-background", idx % 2 === 0 ? "md:pe-15" : "md:ps-15") }>
                              <Image src={ ad.img } alt="" width={ 1448 } height={ 1086 } className={ clsx("md:w-1/2", idx % 2 === 0 ? "md:order-1" : "md:order-2") } />
                              <div className={ clsx("flex flex-col justify-center items-start gap-3 md:gap-6", idx % 2 === 0 ? "md:order-2" : "md:order-1") }>
                                   <h1 className="font-semibold md:text-3xl">{ ad.caption }</h1>
                                   <p className="text-xl">{ ad.description }</p>
                                   <Button size="large">{ ad.category === "food" ? "Order Now" : "Get Tickets" }</Button>
                              </div>
                         </div>
                    );
               }) }
               {/* end mapped */ }
          </div>
     );
}
