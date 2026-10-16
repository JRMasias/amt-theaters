export default function page()
{
     return (
          <div className="px-4 py-5">
               <h1 className="text-3xl font-bold">AMT Theaters in [City], [State]</h1>
               <div className="pt-10 flex flex-col justify-center gap-2">
                    <p className="text-blue-500 text-base uppercase">Make Current</p>
                    <h2 className="text-xl">[Theater Name #]</h2>
                    <h3 className="text-lg text-neutral-500">[Theater Address]</h3>
                    <h3 className="text-base text-neutral-500 hover:underline">[Theater Phone]</h3>
                    <h3 className="text-sm text-neutral-500">Open: [Theater Open] - [Theater Close]</h3>
               </div>
          </div>
     );
}
