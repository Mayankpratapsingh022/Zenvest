"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Card from "../LottiePlayer/page";
export function BackgroundGradientDemo() {
  return (




    <div className="">
<section className="bg-[#030712] ">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
	
	
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <Card  src='plant' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
		</div>

    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		

    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
   Secure Your Investments for Compounding Magic
   </p>

   <p className="text-sm text-neutral-600 dark:text-neutral-400">
   Keep you Investments protected and ready  to experience the magic of  Compounding  
Without  facing crunch for emergency Cash 

   </p>
	
		</div>
	</div>
</section>



<section className="">
	<div className="container flex  flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			
 
    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
   Built Your own Emergency  Credit Line 
   
           </p>
   
           <p className="text-sm text-neutral-600 dark:text-neutral-400">
           Access Capital 
   Without depending on  Pre-Set Banking Limits for You or Your Organisations 
   On Equity Collateral 
   
           </p>
      
	


		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">


 <Card  src='card' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />




		</div>
	</div>
</section>


<section className="bg-[#030712] ">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

	
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <Card  src='emi' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
		</div>


    	<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		

    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
   
  
Pay only Intrest Amount
   </p>

   <p className="text-sm text-neutral-600 dark:text-neutral-400">
   Pay only the Interest Not Even EMI till the loan term Pay Interest on the Flexible Principle value you choose. balloon amout accepted
   </p>
	
		</div>

	</div>
</section>







    </div>
  );
}
