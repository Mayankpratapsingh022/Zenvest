"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      Join The Waitlist
      </h2>
      <p className="text-neutral-600 text-xs max-w-sm mt-2 dark:text-neutral-300">
      Rest assured, your data is safe with us. We promise not to spam. Check our privacy policy for details.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="name" placeholder="Bakulesh Rane" type="text" />
          </LabelInputContainer>

        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Bakulesh@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Linked with adhaar" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="pan">PAN Number</Label>
          <Input
            id="pan"
            placeholder="ABCTY3245D"
            type="twitterpassword"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8 ">
          <Label htmlFor="SecurityType">Security Type</Label>
       <div >
  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer" >
      <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="html" />
      <span className="absolute text-emerald-500  transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx={8} cy={8} r={8} />
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-white cursor-pointer select-none" >
   Mutual Fund
    </label>
  </div>
  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer">
      <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="react" defaultChecked />
      <span className="absolute text-emerald-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx={8} cy={8} r={8} />
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-white cursor-pointer select-none" >
  Index Fund
    </label>
  </div>
</div>
<div>
  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer" >
      <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="html" />
      <span className="absolute text-emerald-500  transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx={8} cy={8} r={8} />
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-white cursor-pointer select-none" >
   Bond
    </label>
  </div>
  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer">
      <input name="type" type="radio" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" id="react" defaultChecked />
      <span className="absolute text-emerald-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx={8} cy={8} r={8} />
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-white cursor-pointer select-none" >
 ETF
    </label>
  </div>
</div>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
         Apply Now &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
