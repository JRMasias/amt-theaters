"use client";

import { useParams } from "next/navigation";

export default function MoviesById()
{
     const { id } = useParams();
     return (
          <div>
               <h1 className="text-3xl text-[#ffaa00]">Movie ID: { id }</h1>
          </div>
     );
}
