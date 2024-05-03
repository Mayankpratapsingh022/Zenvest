import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid,BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Table() {
  return (
    <div className="py-5">
        <h1 className="font-bold text-center py-2 text-4xl">Loan Details & Charges</h1>
        <p className="text-center py-5 pb-10">Our aim is to cater to your financial needs with utmost transparency with no hidden charges.</p>
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
<p className="text-center text-white py-2 pt-10"><b>NOTE: </b>Loan against shares is only possible on business days from 7 a.m. - 7 p.m.</p>
<p className="text-center text-white py-2 pb-10"><b>NOTE: </b>Currently the Loan against Mutual Funds in DEMAT form is available on business days from 7 a.m. - 7 p.m.</p>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Rs. 1,00,00,000",
        description: "Maximum Loan Against Equity Mutual Funds (65% LTV)",
        header:<>
        <div className="p-2"></div>
        </>
       
    
      },
  {
    title: "₹15,000",
    description: "Minimum Loan Amount",
    header: <><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" ><path d="M7.02,4.199c-.003-.067-.02-.131-.02-.199C7,1.791,8.791,0,11,0s4,1.791,4,4h-6c-.678,0-1.34,.069-1.98,.199Zm16.98,6.801v6h-1.587c-.665,1.634-1.868,3.013-3.413,3.908v3.092h-5v-2h-4v2H5v-3.08c-2.449-1.42-4-4.07-4-6.92,0-1.176,.262-2.291,.72-3.298-1.013-.482-1.72-1.508-1.72-2.702,0-1.654,1.346-3,3-3v2c-.551,0-1,.448-1,1,0,.479,.346,.862,.796,.959,1.468-1.803,3.703-2.959,6.204-2.959h6c.115,0,.226,.021,.341,.026,1.109-3.01,4.659-3.026,4.659-3.026V7.811c1.043,.839,1.896,1.915,2.414,3.189h1.586Zm-5,1c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Z"/></svg></>,
   
  },
  {
    title: "12 months",
    description:
      "Loan Tenure",
    header:<>
    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" fill="#ffffff" viewBox="0 0 24 24" ><path d="M0,19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm17-4.5A1.5,1.5,0,1,1,15.5,16,1.5,1.5,0,0,1,17,14.5Zm-5,0A1.5,1.5,0,1,1,10.5,16,1.5,1.5,0,0,1,12,14.5Zm-5,0A1.5,1.5,0,1,1,5.5,16,1.5,1.5,0,0,1,7,14.5Z"/><path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V8H24V7A5.006,5.006,0,0,0,19,2Z"/></svg>
</>

  },
  {
    title: "Fixed Processing Fees",
    description:
      "2% (of loan amount) or Rs.1,000 (whichever is higher) + GST",
    header:<>
   <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M18,21H5c-2.76,0-5-2.24-5-5v-7c0-.55,.45-1,1-1s1,.45,1,1v7c0,1.65,1.35,3,3,3h13c.55,0,1,.45,1,1s-.45,1-1,1Zm-4-12c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm10-2v6c0,2.21-1.79,4-4,4H8c-2.21,0-4-1.79-4-4V7c0-2.21,1.79-4,4-4h12c2.21,0,4,1.79,4,4Zm-7,3c0-1.65-1.35-3-3-3s-3,1.35-3,3,1.35,3,3,3,3-1.35,3-3Z"/></svg>

</>

  },

  {
    title: "Rs. 1,00,00,000",
    description: "Maximum Loan Against Debt Mutual Funds (75% LTV)",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Penal Interest Rate",
    description: "2.00% P.M. for the default period",
    header:<>
    <div className="p-2"></div>
    </>
   
  
  },
  {
    title: "Promise To Disburse Loan in 4 hours",
    description: "(if not, we’ll return 50% of your processing fee!)",
    header: <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm.752,8.44l-.004,.004c-.744,.744-2.058,.746-2.823-.019l-2.182-2.268,1.387-1.441,2.216,2.301,3.614-3.703,1.398,1.43-3.607,3.696ZM3,6C3,2.691,5.691,0,9,0s6,2.691,6,6-2.691,6-6,6S3,9.309,3,6ZM12.721,24H0v-5c0-2.761,2.239-5,5-5h6.079c-.682,1.178-1.079,2.541-1.079,4,0,2.393,1.056,4.534,2.721,6Z"/>
</svg>
</>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Minimum Withdrawal Amount",
    description: "₹1,000 However, there is no limit on the number of withdrawals.",
    
  },
  {
    title: "Annual Renewal Charges",
    description: "Rs. 999+GST",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Bounce Charges",
    description: "Rs. 500+GST",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Collection Charges",
    description: "Rs. 5,000 (in case of default)",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Interest Rate Per Annum",
    description: "Starting 8% Per Annum Flat",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Legal Charges",
    description: "Rs. 5,000 (in case of default)",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Stamp Duty Charges",
    description: "NIL",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Top Up/Security withdrawal Charges",
    description: "NIL",
    header:<>
    <div className="p-2"></div>
    </>
   
  }, {
    title: "Foreclosure Charges",
    description: "NIL",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Security Invocation Charges",
    description: "NIL",
    header:<>
    <div className="p-2"></div>
    </>
   
  },
  {
    title: "Interest Rate",
    description: "Starting at 0.67%/month ",
    header:<>
    <div className="p-1 ">
        <p>Interest will be due on 1st of every month and the same will be debited on 5th of every month from your Bank Account via NACH mandate.</p>
    </div>
    </>,
    
   
  },
];
