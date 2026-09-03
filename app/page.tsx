import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { MainTop } from "./components/main-top/MainTop";
import { MainMiddle } from "./components/main-middle.tsx/MainMiddle";
import { MainBottom } from "./components/main-bottom/MainBottom";
import { Video } from "./components/video/Video";
import { SmallNav } from "./components/small-nav/SmallNav";

export default function Home() {

  return (
    <div className="">
      <Navbar />
      <SmallNav />
      <Hero />
      <MainTop />
      <MainMiddle />
      <MainBottom />
      <Video />
    </div>
  );
}
