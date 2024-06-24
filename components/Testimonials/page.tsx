'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden "
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: Function;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 ${
        isActive ? "z-10 bg-emerald-500" : "z-0 bg-white"
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white",
        }}
      />
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-indigo-50" : "text-neutral-700"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "Wow it will be my Opportunistic Trading Fund.",
    by: "Rohit",
    imgSrc: "1.jpg",
  },
  {
    tempId: 1,
    testimonial:
      "I will like to  have  this  Emergency Credit Line .",
    by: "Raj",
    imgSrc: "2.jpg",
  },
  {
    tempId: 2,
    testimonial:
      "That’s a great free  growing  Unconditional  Health Care  Emergency Fund which might cover full costs ",
    by: "Shyam",
    imgSrc: "3.jpg",
  },
  {
    tempId: 3,
    testimonial:
      "Oho that’s a magic wallet.",
    by: "Pratibha",
    imgSrc: "4.jpg",
  },
  {
    tempId: 4,
    testimonial: "Health Insurance doesn’t beats Inflation.Same premium will buy me better care with the Magic of SIPs in Mutual Fund.",
    by: "Samruddhi",
    imgSrc: "5.jpg",
  },
  {
    tempId: 5,
    testimonial:
      "That’s low cost Credit for my Business Opportunities.As my Business runs on Market Opportunities.",
    by: "Manoj",
    imgSrc: "6.jpg",
  },
  {
    tempId: 6,
    testimonial:
      "Great it will solve my Cash Crunch in  my Small Scale Production unit when my money gets stuck with Sellers .",
    by: "Devraj",
    imgSrc: "7.jpg",
  },
  {
    tempId: 7,
    testimonial:
      "Wow it is  like Compounding Credit Card with tiniest interest rate.",
    by: "Ram",
    imgSrc: "8.jpg",
  },
  {
    tempId: 8,
    testimonial: "Superb I can park my savings in MFs  to start my Dream Business with this . ",
    by: "Akashay ",
    imgSrc: "9.jpg",
  },
  {
    tempId: 9,
    testimonial: "That will be my  future Foreign Eduction  fund. Parked  Funds  to show  + Usable in  real needs anytime.",
    by: "Shivani",
    imgSrc: "10.jpg",
  },
  {
    tempId: 10,
    testimonial:
      "Cool my Funds will stay protected to see the magic of Compounding.",
    by: "Nikita",
    imgSrc: "11.jpg",
  },
  {
    tempId: 11,
    testimonial:
      "A great tool for my clients to increase their investment in Mutual Funds as Savings.",
    by: "Jeevan",
    imgSrc: "12.jpg",
  },
  {
    tempId: 12,
    testimonial:
      "A great tool for my clients to increase their investment in Mutual Funds as Savings.",
    by: "hello",
    imgSrc: "12.jpg",
  },
];