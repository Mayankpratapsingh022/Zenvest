"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Build Your Safety Net 💪",
    designation: "",
    content: (
      <p>
    
        Built  Your Own <Highlight> Emergency Credit </Highlight> <br></br> Line 
        to fit your needs.
      </p>
    ),
  },
  {
    id: 1,
    name: "Set Your Limit 📈",
    designation: "",
    content: (
      <p>
    
    Tailor your <Highlight>  Credit Limit  </Highlight> <br></br>to match your needs and financial goals. 
      </p>
    ),
  },
  {
    id: 2,
    name: "Pay Interest Only 🧮",
    designation: "",
    content: (
      <p>
    
    You only pay <Highlight> Interest  </Highlight> on the amount you use, not the full credit limit.
      </p>
    ),
  },
  {
    id: 3,
    name: "Balloon Payments Accepted 🎈",
    designation: "",
    content: (
      <p>
    
    Make <Highlight>Larger Payments  </Highlight> towards your balance without penalty 
      </p>
    ),
  },
  {
    id: 4,
    name: "Get loans from 10k up to 10 Crore Rs 💸",
    designation: "",
    content: ( <p>Depending on the collateral value, you can borrow from <Highlight> 10,000 to <br></br> 10 crore  </Highlight> rupees.</p>)
  }



];
