interface ButtonProps
{
     size?: "small" | "large" | "XL";
     className?: string;
     children: React.ReactNode;
     onClick?: () => void;
}

export default function Button({ size, children, onClick, className }: ButtonProps)
{
     const button = size === "large" ? <button className={ `bg-red-600 text-xl font-semibold px-6 py-3 rounded-full ${ className }` } onClick={ onClick }>{ children }</button> : size === "XL" ? <button className={ `bg-red-600 text-2xl font-semibold px-8 py-4 rounded-full ${ className }` } onClick={ onClick }>{ children }</button> :
          <button className={ `bg-red-600 text-xl font-semibold px-4 lg:px-6 py-1 lg:py-3 rounded-full ${ className }` } onClick={ onClick }>
               { children }
          </button>;
     return button;
}
