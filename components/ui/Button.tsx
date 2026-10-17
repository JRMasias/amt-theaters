interface ButtonProps
{
     size?: "xs" | "small" | "md" | "large" | "XL";
     className?: string;
     children: React.ReactNode;
     onClick?: () => void;
}

export default function Button({ size, children, onClick, className }: ButtonProps)
{
     switch (size)
     {
          case "xs":
               return <button className={ `bg-red-600 text-base font-semibold px-3 lg:px-3 py-1 lg:py-2 rounded-full ${ className }` } onClick={ onClick }>{ children }</button>;
          case "md":
               return <button className={ `bg-red-600 text-lg font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full ${ className }` } onClick={ onClick }>{ children }</button>;
          case "large":
               return <button className={ `bg-red-600 text-xl font-semibold px-6 py-3 rounded-full ${ className }` } onClick={ onClick }>{ children }</button>;
          case "XL":
               return <button className={ `bg-red-600 text-2xl font-semibold px-8 py-4 rounded-full ${ className }` } onClick={ onClick }>{ children }</button>;
          default:
               return <button className={ `bg-red-600 text-lg font-semibold px-4 lg:px-6 py-1 lg:py-3 rounded-full ${ className }` } onClick={ onClick }>{ children }</button>;
     }
}