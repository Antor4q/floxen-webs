

import AboutBanner from "@/src/components/about/AboutBanner";
import Details from "./Details";
import HowItWorks from "./howItWorks/HowItWorks";
import CLHowItWorks from "./howItWorks/CLHowItWorks";


const About = () => {


    return (
        <div className="bg-[#040006] ">

           <div className="px-10 pt-40 pb-10 relative container mx-auto">
               <AboutBanner/>
               <Details/>
               {/* <HowItWorks/> */}
               {/* claude */}
               <CLHowItWorks/>
           </div>
        </div>
    );
};

export default About;