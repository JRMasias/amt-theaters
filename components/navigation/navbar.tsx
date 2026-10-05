import DesktopMenu from "./desktopmenu";
import MobileMenu from "./mobilemenu";

export default function Navbar()
{

     return (
          <>
               <MobileMenu />
               <DesktopMenu />
          </>
     );
}