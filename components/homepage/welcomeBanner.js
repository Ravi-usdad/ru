import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
import React from "react";
import FindMe from "../partial/findme";
import { Moli } from "../icons";

export default function WelcomeBanner() {
  return (
    <div className="bg-black border-b border-gray h-[calc(100vh-100px)] relative flex overflow-hidden">
      <div className="flex flex-col gap-15 justify-center items-center z-[1] w-full">
        <div className="tracking-[3px] uppercase font-medium text-[14px] text-body-color">
          welcome to my world
        </div>
        <div className="section-title text-body-color flex flex-col md:gap-15">
          <div className="text-center">
            Hi, I’m <span className="text-secondary">Ravi Usadad</span>
          </div>
          <div className="xl:text-[48px] text-center">
            <span className="text-secondary">a </span>
            <Typewriter
              words={['Web Designer', 'Web Developer', 'Figma To HTML',  ]}
              cursor
              loop
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
        <div className="leading-[30px] max-w-[680px] w-full text-center text-white">
          I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
        </div>
        <div className="mt-15">
          <FindMe />
        </div>
      </div>
      <div className="moli-svg h-full overflow-hidden absolute w-full bottom-0 left-1/2 translate-x-[-40%]"><Moli /></div>
      <style>{`
          .moli-svg svg{
            position: absolute;
            bottom: 0;
            object-fit: cover;
            width: 100%;
            object-position: left bottom;
            max-height: 100%;
          } 
          .moli-svg svg use:nth-of-type(3){
            fill: black;
          }
      `}</style>
    </div>
  )
}