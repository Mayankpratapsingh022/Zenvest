'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <p className="text-center"><b className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-400 px-1 py-0.5">Great  Vehicle for MSMEs & SMEs</b> businesses to mitigate Instant Liquid Cash Crunch 
Provision for Access up to  95 % of the Collateral Value 
Personalised  Low Interest  + Low EMI Loans 
Lowest Interest  rate loans  available in the Market
</p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Low EMI",
    description:
      "We offer a low EMI on your loan against securities. EMI starting from Rs. 1,333 per month for Rs. 1,00,000 loan.",
    link: "",
  },
  {
    title: "Instant Approval",
    description:
      "Get instant approval on your loan against securities, disbursed within 4 hours. If we delay, we’ll return 50% of your processing fee!",
    link: "#",
  },
  {
    title: "No Pre-payment Charges",
    description:
      "You have the freedom to pay at will as we have no prepayment charges on your loan.",
    link: "#",
  },
  {
    title: "Flexible Amounts",
    description:
      "Get quick capital against your securities starting from Rs. 15,000 to Rs. 1,00,00,000",
    link: "#",
  },
  {
    title: "Retain Fund Growth",
    description:
      "Pledging your investments ensures that your savings grow, and your wealth plan remains intact even while you borrow.",
    link: "#",
  },
  {
    title: "Direct Bank Deposit",
    description:
      "Apply and get funds directly to any of your bank account from the comfort of your home..",
    link: "#",
  },
];
