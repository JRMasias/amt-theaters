import Adlist from "@/components/Adlist";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/navbar";
import Attractions from "@/components/slideshow/Attractions";
import Slideshow from "@/components/slideshow/Slideshow";

export default function Home()
{
  return (
    <main>
      <Slideshow />
      <Attractions />
      <Adlist />
      <Footer />
    </main>
  );
}
