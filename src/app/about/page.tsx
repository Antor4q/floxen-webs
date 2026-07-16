

import AboutBanner from "@/src/components/about/AboutBanner";
import Details from "../../components/about/Details";

import CLHowItWorks from "../../components/about/howItWorks/CLHowItWorks";
import AboutCta from "@/src/components/about/AboutCta";
import HowIt from "@/src/components/about/howItWorks/HowIt";


const About = () => {


    return (
        <div className="bg-[#020202] ">

           <div className="px-10 pt-40 pb-10 relative max-w-360 mx-auto">
               <AboutBanner/>
               <Details/>
              <HowIt/>
               {/* claude */}
               {/* <CLHowItWorks/> */}
               <AboutCta/>
           </div>
        </div>
    );
};

export default About;