'use client'
import React, { useState } from 'react';

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 4;

    return (
        <>
            <div className="flex justify-center items-center">
                <article className="rounded-xl border flex flex-col justify-center  border-zinc-700 bg-black p-4 m-10 sm:w-1/2 lg:w-2/6">
                    <div className="flex justify-center">
                        <div className="flex justify-center gap-2 w-4/6">
                            {Array.from({ length: totalSteps }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1/5 h-5 rounded-sm  ${index < currentStep ? 'bg-emerald-500' : 'bg-zinc-400'} ${index === currentStep - 1 ? '' : 'cursor-not-allowed'}`}
                                    onClick={() => setCurrentStep(index + 1)}
                                ></div>
                            ))}
                        </div>
                    </div>

                 <h1 className='text-5xl font-bold mx-5 mt-8 '>Step 1</h1>   
                 <p className='m-5 '>Login into Zenvest via your Aadhar-enabled mobile number</p>
                 <button className='m-5 bg-emerald-500 rounded-2xl border-2 hover:bg-emerald-600  px-6 py-3 lg:w-1/6 sm:3/6 font-semibold uppercase text-white '>Next</button>
                </article>
             
  
                
            </div>
        </>
    );
}
