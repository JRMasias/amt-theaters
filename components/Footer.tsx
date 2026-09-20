import Image from "next/image";
import { links } from "@/app/util/footerlinks";
import Divider from "@/components/Divider";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer()
{
     return (
          <footer className="flex flex-col justify-center items-center pt-10">
               <Image src="/images/7.png" alt="AMC Logo" width={ 1536 } height={ 1024 } className="w-3/5 max-w-96" />
               <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8 w-full mt-10">
                    <button type="button" className="font-semibold border-2 border-[#ffaa00] rounded-lg text-[#ffaa00] p-2 cursor-pointer hover:bg-[#ffaa00] hover:text-neutral-950 transition-colors duration-300">Get Tickets</button>
                    <button className="font-semibold border-2 border-[#ff2222] rounded-lg text-[#ff2222] p-2 cursor-pointer hover:bg-[#ff2222] hover:text-neutral-950 transition-colors duration-300">Order Food</button>
               </div>
               <Divider>
                    <FaFacebookF className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaInstagram className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaTwitter className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaYoutube className="text-2xl w-10 h-10 p-2 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
               </Divider>
               <div className="w-full bg-neutral-800 p-10 flex flex-col lg:flex-row justify-between items-start">
                    { links.map((link, idx) =>
                    {
                         return <div className="flex flex-col items-center w-full pb-10 lg:pb-0" key={ idx }>
                              { link.map((item, id) =>
                              {
                                   return <ul className="text-white flex flex-col justify-self-start items-center" key={ id }>
                                        { item.category ? <h1 className="text-2xl font-bold text-[#00ccff]">{ item.title }</h1> :
                                             <li className="text-white text-lg hover:text-[#FFAA00] cursor-pointer transition-colors duration-300">{ item.title }</li> }
                                   </ul>;
                              }) }
                         </div>;
                    }) }
               </div>
               <div className="w-full flex flex-col justify-center items-center border-t border-neutral-600 py-5 bg-neutral-800 gap-4">
                    <Image src="/images/9.png" alt="AMC Logo" width={ 2135 } height={ 736 } className="w-24" />
                    <p className="text-white text-center">
                         &copy; 2026 AMT Theatre Theaters
                    </p>
               </div>
          </footer>
     );
}
