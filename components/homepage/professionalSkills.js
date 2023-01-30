import React from "react";
import { HTML, CSS, BootstrapIcon, JavaScript, FigmaIcon, TailwindIcon, NextJsIcon, ReactJsIcon } from "../icons";


export default function ProfessionalSkills() {

    const professionalSkillsItem = [
        {
            title: "HTML 5",
            image: <HTML />,
            width: 160,
            height: 160,
        },
        {
            title: "CSS 3",
            image: <CSS />,
            width: 160,
            height: 160,
        },
        {
            title: "JavaScript",
            image: <JavaScript />,
            width: 160,
            height: 160,
        },
        {
            title: "Bootstrap",
            image: <BootstrapIcon />,
            width: 160,
            height: 160,
        },
        {
            title: "Tailwind CSS",
            image: <TailwindIcon />,
            width: 160,
            height: 160,
        },
        {
            title: "Figma",
            image: <FigmaIcon />,
            width: 160,
            height: 160,
        },
        {
            title: "Next Js",
            image: <NextJsIcon />,
            width: 160,
            height: 160,
        },
        {
            title: "React Js",
            image: <ReactJsIcon />,
            width: 160,
            height: 160,
        },
    ]

    return (
        <div className="bg-[#191919]" id="skills">
            <div className="container md:py-80 py-50 border-b border-gray">
                <div className="text-secondary text-center text-[14px] tracking-[2px] font-medium md:mb-10">
                    Features
                </div>
                <div className="section-title text-center mb-50 text-body-color">
                    Professional Skills
                </div>
                <div className="skills-box grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 md:gap-50 sm:gap-30 gap-50 ease-in-out duration-300">
                    {professionalSkillsItem.map((item, key) => (
                        <div key={key} className="skills-item flex flex-col items-center justify-center ease-in-out duration-300">
                            <div className="border border-[#242527] rounded-full h-[160px] w-[160px] overflow-hidden relative mb-[30px] bg-gradient-box-black shadow-box-black">
                                <span>
                                    {item.image}
                                </span>
                            </div>
                            <div className="text-base text-white font-bold">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .skills-box:hover .skills-item{
                   opacity: 0.5;
                } 
                .skills-box:hover .skills-item:hover{
                    opacity: 1;
                 } 
            `}</style>
        </div>
    )
}