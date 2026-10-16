interface ButtonProps
{
     size?: "small" | "large";
     children: React.ReactNode;
     onClick?: () => void;
}

export default function Button({ size, children, onClick }: ButtonProps)
{
     const button = size === "large" ? <button className="bg-red-600 text-xl font-semibold px-6 py-3 rounded-full" onClick={ onClick }>{ children }</button> :
          <button className="bg-red-600 text-xl font-semibold px-4 lg:px-6 py-1 lg:py-3 rounded-full" onClick={ onClick }>
               { children }
          </button>;
     return button;
}
