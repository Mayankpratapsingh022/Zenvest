'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SteppedProgress = () => {
  const [stepsComplete, setStepsComplete] = useState(1);
  const numSteps = 4;

  const handleSetStep = (num: -1 | 1) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    <div className="px-4 py-14 ">
      <div className="p-8 bg-white shadow-lg rounded-md w-full max-w-2xl mx-auto">
        <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
        <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg">
        {
stepsComplete == 1? <div className="flex  gap-5 flex-col p-4">

<h1 className="text-4xl text-black font-bold">Step 1</h1>
<p className="text-zinc-950 lg:text-xl sm:text-md">Login into Zenvest via your  Aadhar-enabled mobile number</p>
</div>:""
        }

{
stepsComplete == 2? <div className="flex  gap-5 flex-col p-4">

<h1 className="text-4xl text-black font-bold">Step 2</h1>
<p className="text-zinc-950  lg:text-xl sm:text-md">Upload your KYC documents or fill  them in a fresh to start the lending process.</p>
</div>:""
        }


{
stepsComplete == 3? <div className="flex  gap-5 flex-col p-4">

<h1 className="text-4xl text-black font-bold">Step 3</h1>
<p className="text-zinc-950  lg:text-xl sm:text-md">Mark lien on the mutual funds  or shares starting at Rs 10,000</p>
</div>:""
        }

{
stepsComplete == 4? <div className="flex  gap-5 flex-col p-4">

<h1 className="text-4xl text-black font-bold">Step 4</h1>
<p className="text-zinc-950  lg:text-xl sm:text-md">Relax & wait your loan will  be disbursed into your account within 4 hours.</p>
</div>:""
        }

{
stepsComplete == 0? <div className="flex h-full justify-center items-center gap-5  p-4">

<h1 className="lg:text-4xl sm:text-2xl p-5 text-black font-bold">How to Apply for loan</h1>
</div>:""
        }
    </div>
        <div className="flex items-center justify-end gap-2">
        
          <button
            className="px-4 py-1 rounded hover:bg-gray-100 text-black"
            onClick={() => handleSetStep(-1)}
          >
            Prev
          </button>
          <button
            className="px-4 py-1 rounded bg-black text-white"
            onClick={() => handleSetStep(1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Steps = ({
  numSteps,
  stepsComplete,
}: {
  numSteps: number;
  stepsComplete: number;
}) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="w-full h-1 rounded-full bg-gray-200 relative">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-emerald-500 rounded-full"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }: { num: number; isActive: boolean }) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
          isActive
            ? "border-emerald-500 bg-emerald-500 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute z-0 -inset-1.5 bg-indigo-100 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default SteppedProgress;