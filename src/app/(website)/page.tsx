import ContentSection from "../../components/home/allData/ContentSection";
import Banner from "../../components/home/Banner";


import Hero from "../../components/home/Hero";
import HeroBackground from "../../components/home/HeroBackground";
import { WebGLShader } from "../../components/home/WebGLShader";
import Cta from "../../components/shared/Cta";
import FeaturedCollection from "../../components/shared/FeaturedCollection";
import Header from "../../components/shared/Header";




export default function Home() {
  return (
    // bg-[#050505]
    <main className="relative overflow-hidden bg-[#040006]">
     
    
   

  <div className="relative h-[550px] overflow-hidden bg-[#040006]">
    <WebGLShader />

    <div className="relative z-10">
        {/* <Header /> */}
        <Hero />
    </div>
</div>
 {/* other components */}
 <div className="bg-[#020202]">
  <ContentSection/>
 </div>

    </main>
    
  );
}