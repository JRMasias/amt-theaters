import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/navbar";
import NowPlayingSlideshow from "@/components/slideshow/NowPlayingSlideshow";
import Slideshow from "@/components/slideshow/Slideshow";

export default function Home()
{
  return (
    <main>
      <Navbar />
      <Slideshow />
      <NowPlayingSlideshow />
      <Footer />
    </main>
  );
}
