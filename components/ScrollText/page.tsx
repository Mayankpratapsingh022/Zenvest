'use client'
import { Reveal } from "../Access/page";

import Card from "../LottiePlayer/page";
import Built from "../../components/Built/page";

export const ScrollTex = () =>{
    return(
        <div>
        <section className="flex justify-center gap-3 items-center p-3 my-40 flex-col">
    
         
            <Reveal>
                <p className="text-white  font-thin  text-5xl">Seize</p>
            </Reveal>
                
        
            <Reveal>
                <p className="text-white font-thin text-5xl">Daily</p>
            </Reveal>
                 
            <Reveal>
                <div className="text-[#17f1c0] flex gap-3 font-semibold text-5xl">
                   <p> Opportunities</p>
       </div>
            </Reveal>
            <Reveal>
                <p className="text-white font-thin text-5xl">With</p>
            </Reveal>      

            <Reveal>
                <p className="text-white font-thin text-5xl">Our Free</p>
            </Reveal>      

            <Reveal>
                <p className="text-[#17f1c0] font-semibold text-5xl">Credit Line!</p>
            </Reveal>      
             
            <p className="text-white font-regular text-center py-10 text-sm">From Stock Market Opportunities <br></br>to 
Goods Trading to Emergency Fund 
& countless many more</p>
 
             
        </section>
        	<div className="container mx-auto flex flex-col items-center px-4  text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <Built/>
        <Card  src='loading' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
         
        </div>
        </div>
    )
}