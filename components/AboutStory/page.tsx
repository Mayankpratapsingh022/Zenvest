'use client'
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";

export const AboutStory = () => {
  return (
    <div className="min-h-screen bg-bg-[#030712] px-4 py-12 text-zinc-50">

      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <AboutBlock />
      </motion.div>

    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-black p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-12">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Zenvest{" "}
      <span className="text-zinc-400">
      a Tale of Emergence , Innovation & Resilence

      </span>
    </h1>
   
  </Block>
);


const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
    Once upon a time, {" "}
      <span className="text-zinc-400">
    amidst the serene natural beauty of Bengaluru, I embarked on my first IT job, filled with excitement and hope. Little did I know, this journey would lead me to unexpected challenges and a revolutionary idea.

As part of my job, I had to sign a two-year bond with a hefty breaking amount of one lakh rupees. Eager to secure my future, I invested 1.5 lakh rupees in RVNL shares, buying them at 45 rupees per share, hoping for lucrative returns. However, fate had other plans.

I found myself entangled in a nightmarish project. A bad manager, unbearable night shifts, and immense mental pressure took a toll on my health. The project offered no respite, no work-from-home option, and no comfort. Despite having successfully navigated other projects, this one seemed like a never-ending nightmare.

For the sake of my health and sanity, I decided to leave the project without seeking another job. However, this decision came at a cost. My investment in RVNL shares had grown significantly, with the stock price soaring to over 300 rupees per share in just one year. It was a bitter pill to swallow, knowing that had it not been for the emergency, my investment would have yielded even greater returns.

Faced with this predicament, I searched for a solution in vain. This experience sparked an idea within me – the creation of Zenvest, an ultimate emergency payable flexible credit line. Zenvest aimed to provide individuals with a financial safety net during emergencies, offering flexibility and peace of mind.

Thus, from the ashes of my setback emerged a beacon of hope for many – Zenvest, a testament to resilience, innovation, and the human spirit's ability to triumph over adversity.
      </span>
    </p>
  </Block>
);
