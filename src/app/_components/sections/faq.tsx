"use client";

import { grotesque } from "@/app/utils/font";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { StaggeredOnViewText } from "../utilities/StaggeredText";

const Faq = () => {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Why do you call yourself 'The Simple Engineer'?",
      content:
        "Because simplicity scales. I believe great engineering is about removing unnecessary complexity, making solutions clearer, faster, and easier to maintain. Simplicity isn’t lack of depth—it’s mastery.",
    },
    {
      id: 1,
      question: "What sort of solutions do you provide?",
      content:
        "The one that drives your business sales upwards! Web solutions that convert to sales and more revenue for your business whether large, medium or small scale",
    },

    {
      id: 2,
      question: "Do you believe AI will replace Developers?",
      content:
        "No—but it will replace developers who don’t adapt. AI is a multiplier. Those who combine solid fundamentals with AI tools will build faster and deliver better.",
    },
    {
      id: 3,
      question: "What are your grounds for contract termination?",
      content:
        "Misaligned expectations and poor communication ruin projects faster than bad code. If transparency or collaboration breaks, the project cannot succeed—that’s my line.",
    },
    {
      id: 4,
      question:
        "How long will it take for me to have a fully developed website?",
      content:
        "It depends on clarity. When the scope is clear, websites ship fast. Predictability comes from knowing what we’re building from day one.",
    },
    {
      id: 5,
      question: "Does my business really need a website?",
      content:
        "If your customers use the internet, your business should live there. A website isn’t just presence—it’s leverage. It works, sells, and builds trust 24/7.",
    },
    {
      id: 6,
      question: "What’s one mistake businesses make with their websites?",
      content:
        "They focus on aesthetics before clarity. A beautiful website without a clear value message won’t convert. Clarity always comes first.",
    },
    {
      id: 7,
      question: "What do you value most in a client relationship?",
      content:
        "Clear communication, mutual respect, and shared goals. When both sides understand the mission, delivery becomes smooth and predictable.",
    },
    {
      id: 8,
      question: "Why do you avoid overly complex tech stacks?",
      content:
        "Complexity slows teams down. I prefer pragmatic, scalable tools that help us ship quickly and maintain easily. Simplicity wins over time.",
    },
    {
      id: 9,
      question: "What is your development philosophy?",
      content:
        "Build with clarity, ship with intention, and keep things simple enough to scale. I focus on clean architecture, fast execution, and solving the actual problem—not overengineering.",
    },
  ];

  const handleResponse = (id: number) => {
    setActive(id);
  };

  return (
    <section className="w-full lg:flex item-start py-[10em] lg:px-10 scroll-smooth px-4 relative min-h-[90vh] ">
      <div className="lg:sticky top-32 mb-10 lg:w-[40%] h-fit">
        <h1
          className={`lg:text-[4rem] text-[2rem] font-bold ${grotesque.className}`}
        >
          {" "}
          <StaggeredOnViewText stagger={0.03} duration={0.2} text=".Opinions" />
        </h1>
      </div>
      <div className="flex-col flex lg:w-[60%]">
        {faqs.map(({ id, question, content }) => {
          return (
            <div
              key={id}
              className="pb-10 pt-4 mb-12 border-b-[2px] border-solid border-background/20"
            >
              <div className="flex justify-between items-center">
                <h3
                  onClick={() => handleResponse(id)}
                  className="cursor-pointer text-[1.5rem] lg:text-[1.7rem] hover:text-foreground/50 font-semibold"
                >
                  {question}
                </h3>
                <button
                  onClick={() => handleResponse(id)}
                  className="cursor-pointer text-[1.5rem] lg:text-[1.7rem] hover:text-foreground/50 font-semibold"
                >
                  {active == id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${
                  active == id ? "flex" : "hidden"
                }  text-foreground/70 text-[1.1rem] w-[70%] mt-7`}
              >
                {content}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
