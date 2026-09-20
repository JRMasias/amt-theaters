interface DividerProps {
     children: React.ReactNode;
}

export default function Divider({ children }: DividerProps) {
     return (

          <div className="w-full border-t border-neutral-800 mt-10 py-5 flex justify-evenly items-center">
               { children }
          </div>
     );
}