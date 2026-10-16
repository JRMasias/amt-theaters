import Image from "next/image";
import { FOOD } from "../util/foodAndDrinks";
import Button from "@/components/ui/Button";

export default function page()
{
     return (
          <div className="px-4 py-5 flex flex-col justify-center items-center gap-10">
               { FOOD.map((item) => (
                    <div key={ item.id } className="flex flex-col justify-center gap-2">
                         <Image src={ item.imgSrc } alt={ item.name } className="w-full h-auto object-cover rounded-lg" />
                         <h1 className="text-2xl font-bold">{ item.name }</h1>
                         <p className="text-base text-gray-500">{ item.description }</p>
                         <div className="flex justify-between items-center">
                              <p className="text-lg font-bold">${ item.price.toFixed(2) }</p>
                              <Button>Add to Cart</Button>
                         </div>
                    </div>
               )) }
          </div>
     );
}
