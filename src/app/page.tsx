
import { CardStackDemo } from "../../components/Advantages/page";
import { BackgroundGradientDemo } from "../../components/Benefits/page";
import { StaggerTestimonials } from "../../components/Testimonials/page";

import { CardHoverEffectDemo } from "../../components/Greatvehicle/page";
import Heading from "../../components/Heading/page";
import { AuroraHero } from "../../components/Hero/page";
import { TextParallaxContentExample } from "../../components/RealExamples/page";
import { ScrollTex } from "../../components/ScrollText/page";
import SteppedProgress from "../../components/Stepper/page";
import BasicFAQ from "../../components/FAQs/page";
import HeroTwo from "../../components/HeroTwo/page";
import { Partners } from "../../components/Partners/page";
import Footer from "../../components/Footer/page";

export default function Home() {
  return (
   <>
   <AuroraHero/>
   {/* <Tag/> */}

<Heading/>
   <BackgroundGradientDemo/>
<CardStackDemo/>
<CardHoverEffectDemo/>
<ScrollTex/>
<TextParallaxContentExample/>
<SteppedProgress/>
<StaggerTestimonials/>

<HeroTwo/>
<Partners/>
<BasicFAQ/>
<Footer/>
   </>
  );
}
