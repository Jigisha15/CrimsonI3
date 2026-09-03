import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MainTop } from "./components/MainTop";
import { MainMiddle } from "./components/MainMiddle";
import { MainBottom } from "./components/MainBottom";
import { Video } from "./components/Video";
import { SmallNav } from "./components/SmallNav";

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
