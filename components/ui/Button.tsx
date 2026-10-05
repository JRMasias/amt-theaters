interface ButtonProps
{
     children: React.ReactNode;
     onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps)
{
     return (
          <button className="bg-red-600 text-xl font-semibold px-4 lg:px-6 py-1 lg:py-3 rounded-full" onClick={ onClick }>
               { children }
          </button>
     );
}
