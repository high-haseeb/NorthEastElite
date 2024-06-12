"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Section = ({ index, title }) => {
  return (
    <div className="w-screen h-screen z-0 relative section">
      <div className="z-10 w-screen h-screen absolute top-0 left-0 bg-black/30 flex flex-col gap-0 lg:gap-4 items-center justify-center text-white">
        <div className="tracking-tight text-4xl lg:text-6xl"><AnimatedText>{title}</AnimatedText></div>
        <div className="text-sm lg:text-xl font-normal"><AnimatedText>Lorem ipsum dolor sit amet, qui minim</AnimatedText></div>
        <button className="bg-white px-14 py-3 absolute left-1/2 -translate-x-1/2 bottom-20 text-black rounded-full text-sm font-normal">
          CLICK ME
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 right-8 font-normal text-[1rem] hidden lg:block">0{index}</div>
      </div>
      <Image
        src={`/images/${index}.avif`}
        width={4000}
        height={5000}
        className="z-0 object-cover w-screen h-screen absolute top-0 left-0"
        alt="image"
      />
    </div>
  );
};

const AnimatedText = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        } else {
          entry.target.classList.remove("animate-fadeInUp");
          entry.target.classList.add("opacity-0");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <p ref={textRef} className="opacity-0">
      {children}
    </p>
  );
};

export default Section;
