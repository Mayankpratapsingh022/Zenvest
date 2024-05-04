'use client'
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const BasicFAQ = () => {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="What is Zenvest?" defaultOpen>
          <p>
          Zenvest is a lending platform that offers loans at a 10.5% interest rate using your mutual 
funds and securities as collateral, partnering with top banks and NBFCs in India for a 
secure and seamless service.
          </p>
        </Question>
        <Question title="Is my investment safe with Zenvest?">
          <p>
          Yes, your investments are safe with Zenvest, as we ensure high security and a seamless 
experience by collaborating with leading financial institutions.

          </p>
        </Question>
        <Question title="Will I still earn returns on my pledged investments?">
          <p>
          Yes, pledging your investments does not affect their returns. You can redeem them 
anytime.
          </p>
        </Question>
        <Question title="How can I unpledge my investments?">
          <p>
          You can unpledge by repaying the loan in full or in parts at any time
          </p>
        </Question>
        <Question title="Can I pledge securities under SLBM?">
          <p>
          No, securities under SLBM cannot be pledged.

          </p>
        </Question>
        <Question title="Will I receive dividends or bonuses on my pledged portfolio?">
          <p>
          Yes, any dividends or bonus stocks accrued are yours to keep

          </p>
        </Question>
        <Question title="Can securities held in a company’s name be used for a loan?">
          <p>
          Yes, securities held in your company’s name can be used as collateral for a loan, provided 
they meet the lender’s criteria

          </p>
        </Question>
        <Question title="Can I pledge securities held in the name of my relatives?">
          <p>
          Yes, but they must consent and act as co-borrowers or security providers.


          </p>
        </Question>
        <Question title="Can I make partial payments on my loan?">
          <p>
          Yes, Zenvest’s OD product allows part payments without prepayment charges.


          </p>
        </Question>
        <Question title="What are the pre-closure charges for my loan?">
          <p>
          Zenvest allows pre-closure without additional charges, but check with other lenders as 
charges can vary

          </p>
        </Question>
        <Question title="How are pledged securities valued for margin shortfall?">
          <p>
          Securities are valued in real-time or at the closing NAV. Understanding margin shortfall is 
vital to manage potential risks effectively.

          </p>
        </Question>
        <Question title="What are the types of loans against securities available?">
          <p>
          Loans can be secured against various securities like stocks, bonds, mutual funds, and 
insurance policies, each requiring appropriate collateral
          </p>
        </Question>
        <Question title="How can I make money with Zenvest ?">
          <p>
  
 Peer-toPeer Lending Platform (Comming soon)

Earn upto  Fix 7% Interest Rate per mont
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "#17f1c0",
            },
            closed: {
              color: "#ffffff",
            },
          }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "#17f1c0",
            },
            closed: {
              rotate: "0deg",
              color: "#ffffff",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-150"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;