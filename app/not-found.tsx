import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function NotFound()
{
     return (
          <>
               <div className="bg-neutral-700 lg:max-w-206 lg:mx-auto lg:mt-20 lg:rounded-lg lg:p-10">
                    <div className="flex flex-nowrap justify-center items-center gap-2 pt-4 lg:m-auto">
                         <Image src="/images/character_2.png" alt="" width={ 338 } height={ 390 } className="w-1/5" />
                         <Image src="/images/character_1.png" alt="" width={ 338 } height={ 389 } className="w-1/5" />
                         <Image src="/images/character_3.png" alt="" width={ 401 } height={ 368 } className="w-1/5" />
                         <Image src="/images/character_4.png" alt="" width={ 249 } height={ 263 } className="w-1/5" />
                    </div>
                    <section className="py-5 text-center text-2xl">
                         <h1 className="text-[#ffaa00] text-3xl">Oh No!</h1>
                         <h3 className="pt-3">You stumbled upon our backrooms, but no one is here</h3>
                         <div className="w-4/5 lg:w-2/5 h-px bg-neutral-600 m-auto my-3" />
                         <p>You are seeing this page because the page you searched for isn&apos;t paging.</p>
                         <p>Click <Link href="/" className="text-[#22ccff] font-semibold">Here</Link> to go home</p>
                    </section>
               </div>
               <Footer />
          </>
     );
}
