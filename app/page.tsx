import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/navbar";
import Attractions from "@/components/slideshow/Attractions";
import Slideshow from "@/components/slideshow/Slideshow";

export default function Home()
{
  return (
    <main>
      <Navbar />
      <Slideshow />
      <Attractions />
      <Footer />
    </main>
  );
}
