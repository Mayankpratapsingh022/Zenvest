"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Card from "../LottiePlayer/page";
export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center items-center">
    <div className=" py-5  px-5 flex w-4/6 flex-col lg:flex-row gap-5 justify-center items-center ">
      <BackgroundGradient className="rounded-[22px]   p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Card  src='card' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
Built Your own Emergency  Credit Line 

        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Access Capital 
Without depending on  Pre-Set Banking Limits for You or Your Organisations 
On Equity Collateral 

        </p>
   
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px]   p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Card  src='emi' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
        No Hidden Charges 

        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Pay only the Interest Not Even EMI till the loan term 
Pay Interest on the Flexible Principle value you choose 

        </p>
   
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px]   p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Card  src='plant' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
        Secure Your Investments for Compounding Magic
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Keep you Investments protected and ready  to experience the magic of  Compounding  
Without  facing crunch for emergency Cash 

        </p>
   
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px]   p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Card  src='money' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
   
        Unlock Hassle-Free Capital Instantly

        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Access Capital from 10 Thousand upto 1 Crore Hassle free + Instantly
Access 80% Capital on Collateral Value of  your Funds 	


        </p>
   
      </BackgroundGradient>
    </div>
    </div>
  );
}
