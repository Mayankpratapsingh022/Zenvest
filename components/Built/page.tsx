'use client'
import React, { useEffect } from "react";

const Built = () => {
  return (
    <div className="grid  place-content-center ">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span"
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: typeof span) {
        this.style.fontWeight = "900";
        this.style.color = "#17f1c0";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "#17f1c0";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "#17f1c0";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "100";
        this.style.color = "#17f1c0";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "#17f1c0";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "#17f1c0";
        }
      });
    });
  }, []);

  return (
    <h2 className="hover-text text-center text-5xl font-thin text-[#17f1c0]">
      <Text>
Built Your own Emergency  Credit Line 
</Text>
    </h2>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default Built;