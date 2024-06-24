
import { CardStackDemo } from "../../components/Advantages/page";
import { BackgroundGradientDemo } from "../../components/Benefits/page";
import { StaggerTestimonials } from "../../components/Testimonials/page";

import { CardHoverEffectDemo } from "../../components/Greatvehicle/page";
import Heading from "../../components/Heading/page";
import { AuroraHero } from "../../components/Hero/page";
import { ScrollTex } from "../../components/ScrollText/page";
import SteppedProgress from "../../components/Stepper/page";
import BasicFAQ from "../../components/FAQs/page";
import HeroTwo from "../../components/HeroTwo/page";

import Footer from "../../components/Footer/page";
import { StickyCards } from "../../components/Real Example/page";
import GraphAnimaton from "../../components/Graph/page";
import { DragCloseDrawerExample } from "../../components/Signupform/page";
import { Table } from "../../components/Table/page";
import { PDFDownload } from "../../components/PDFDownload/page";
import Modal from "../../components/RBImodal/page";
import { SwipeCarousel } from "../../components/RealExamples/page";
import Partners from "../../components/Partners/page";
import Zoho from "../../components/Zoho from/page";
import BlogPostCarousel from "../../components/Blog/page";
import { AboutStory } from "../../components/AboutStory/page";
import Team from "../../components/Team/page";
import VideoPlayer from "../../components/Video/page";




export default function Home() {
  return (
   <>
   <AuroraHero/>
   {/* <Tag/> */}

<Heading/>
<Modal/>
   <BackgroundGradientDemo/>
   {/* // this DragCloseDrawer is the old form ui */}
   {/* <Zoho/> */}
   <DragCloseDrawerExample/>
<CardStackDemo/>
<CardHoverEffectDemo/>
{/* <ScrollTex/> */}

<GraphAnimaton/>
<BlogPostCarousel/>
{/* <TextParallaxContentExample/> */}
{/* <SwipeCarousel/> */}
<StickyCards/>

<SteppedProgress/>
{/* <VideoPlayer/> */}
{/* <Table/> */}
<StaggerTestimonials/>

<HeroTwo/>
<Partners/>
<AboutStory/>
<Team/>
<BasicFAQ/>
{/* <PDFDownload/> */}
<Footer/>
   </>
  );
}
