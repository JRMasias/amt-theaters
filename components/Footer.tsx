import Image from "next/image";
import { links } from "@/app/util/footerlinks";
import Divider from "@/components/Divider";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer()
{
     return (
          <footer className="flex flex-col justify-center items-center pt-10 md:pt-20">
               <div className="w-full bg-neutral-950 flex items-center justify-center">
                    <Image src="/images/7.png" alt="AMC Logo" width={ 1536 } height={ 1024 } className="w-3/5 max-w-96" />
               </div>
               <div className="flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-8 w-full  bg-neutral-950 py-10">
                    <button type="button" className="border-2 border-[#ffaa00] rounded-lg text-[#ffaa00] md:text-3xl py-2 md:py-4 px-4 md:px-8 cursor-pointer hover:bg-[#ffaa00] hover:text-neutral-950 transition-colors duration-300">Get Tickets</button>
                    <button className="border-2 border-[#ff2222] rounded-lg text-[#ff2222] md:text-3xl py-2 md:py-4 px-4 md:px-8 cursor-pointer hover:bg-[#ff2222] hover:text-neutral-950 transition-colors duration-300">Order Food</button>
               </div>
               <Divider>
                    <FaFacebookF className="text-2xl w-10 md:w-15 h-10 md:h-15 p-2 md:p-3 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaInstagram className="text-2xl w-10 md:w-15 h-10 md:h-15 p-2 md:p-3 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaTwitter className="text-2xl w-10 md:w-15 h-10 md:h-15 p-2 md:p-3 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
                    <FaYoutube className="text-2xl w-10 md:w-15 h-10 md:h-15 p-2 md:p-3 rounded-full border border-white text-white cursor-pointer hover:border-[#FFAA00] hover:text-[#FFAA00] hover:scale-105 transition-all duration-300" />
               </Divider>
               <div className="w-full p-10 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-evenly items-start gap-8 bg-neutral-900">
                    { links.map((link, idx) =>
                    {
                         return <div className="flex flex-col items-center md:items-start md:gap-1 w-full pb-10 lg:pb-0" key={ idx }>
                              { link.map((item, id) =>
                              {
                                   return <ul className="text-white flex flex-col" key={ id }>
                                        { item.category ? <h1 className="text-2xl md:text-3xl font-bold text-[#00ccff]">{ item.title }</h1> :
                                             <li className="text-white text-lg md:text-xl hover:text-[#FFAA00] cursor-pointer transition-colors duration-300">{ item.title }</li> }
                                   </ul>;
                              }) }
                         </div>;
                    }) }
               </div>
               <div className="w-full flex flex-col justify-center items-center border-t border-neutral-800 bg-neutral-900 py-5 gap-4">
                    <Image src="/images/9.png" alt="AMC Logo" width={ 2135 } height={ 736 } className="w-24" />
                    <p className="text-white text-center text-lg">
                         &copy; 2026 AMT Theatre Theaters
                    </p>
                    <p className="text-center text-neutral-50/10 text-xs">Page developed & designed by Johnathon Masias</p>
               </div>
          </footer>
     );
}
