import Adlist from "@/components/Adlist";
import Attractions from "@/components/slideshow/Attractions";
import Slideshow from "@/components/slideshow/Slideshow";

export default function Home()
{
  return (
    <main>
      <Slideshow />
      <Attractions />
      <Adlist />
    </main>
  );
}
