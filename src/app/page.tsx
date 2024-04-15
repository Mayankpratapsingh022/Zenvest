
import { CardStackDemo } from "../../components/Advantages/page";
import { BackgroundGradientDemo } from "../../components/Benefits/page";

import { CardHoverEffectDemo } from "../../components/Greatvehicle/page";
import Heading from "../../components/Heading/page";
import { AuroraHero } from "../../components/Hero/page";
import { TextParallaxContentExample } from "../../components/RealExamples/page";
import { ScrollTex } from "../../components/ScrollText/page";
import Tag from "../../components/tag/page";

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
   </>
  );
}
