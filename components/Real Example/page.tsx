'use client'
import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import { FaCar,FaChild } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className="h-full bg-black" />
    </>
  );
};

interface CardProps {
  position: number;
  card: CardType;
  scrollYProgress: MotionValue;
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "black" : "#17f1c0",
        color: isOddCard ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>

    </motion.div>
  );
};

const CARD_HEIGHT = 500;

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  ctaClasses: string;
  routeTo: string;
};

const CARDS: CardType[] = [
  {
    id: 1,
    Icon: FaCar,
    title: "No More",
    description:
      "Car EMI destroys the Experience of Buying Cars",
    ctaClasses: "bg-violet-300",
    routeTo: "",
  },
  {
    id: 2,
    Icon: GiDiamondRing,
    title: "Stress-Free Marriage",
    description:
      "Better way of Planning Marriage",
    ctaClasses: "bg-pink-300",
    routeTo: "#",
  },
  {
    id: 3,
    Icon: FaChild,
    title: "Plan, Save, Prosper",
    description:
      "Secure Your Child's Education Future",
    ctaClasses: "bg-red-300",
    routeTo: "#",
  },
  {
    id: 4,
    Icon: FaMoneyBillWaveAlt,
    title: "Buy Now, Pay Later",
    description:
      "No More Buy Now Suffer Later under EMIs",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },

];