"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEventHandler } from "react";

const angle = 7

export default function Home() {
    const xPercent = useMotionValue(0)
    const yPercent = useMotionValue(0)

    const rotateX = useTransform(yPercent, [-0.5, 0.5], [`${angle}deg`, `-${angle}deg`])
    const rotateY = useTransform(xPercent, [-0.5, 0.5], [`-${angle}deg`, `${angle}deg`])
    
    const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
        const{width, height, left, top} = e.currentTarget.getBoundingClientRect(); // position in relation to top left of screen

        const currentMouseX = e.clientX - left // find mouse position in relation to component
        const currentMouseY = e.clientY - top;

        return {
            currentMouseX,
            currentMouseY,
            containerWidth: width,
            containerHeight: height,
        };
    };
    
    const handleMouseMove: MouseEventHandler = (e) => {
        const{currentMouseX, currentMouseY, containerWidth, containerHeight} = getMousePosition(e);
        xPercent.set(currentMouseX / containerWidth - 0.5)
        yPercent.set(currentMouseY / containerWidth - 0.5)
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div 
        onMouseMove={handleMouseMove}
        className="flex flex-col h-96 w-64 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-400 p-4 shadow-lg overflow-hidden group">
        style={{
            rotateX,
            rotateY
        }}
        <CardContent />
      </motion.div>
    </main>
  );
}

const CardContent = () => {
  return (
    <>
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image src="/profile.png" alt="Profile Picture" fill />
      </div>

      <div className="flex flex-col gap-0 mt-4">
        <h1 className="text-xl font-semibold tracking-tight leading-tight">
          Built With Code
        </h1>
        <p className="text-sm text-neutral-700 font-mono">YouTube</p>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-[0.6rem] font-medium px-2 py-[3px] border-neutral-700 text-neutral-700 border-[1px] rounded-sm">
          Est. January 2021
        </span>
        <button className="fill-[#FF0000] w-6 opacity-70">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </button>
      </div>
    </>
  );
};