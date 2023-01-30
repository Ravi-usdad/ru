import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navigation() {

    const navigationItem = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Features",
            url: "#features",
        },
        {
            name: "Skills",
            url: "#skills",
        },
        {
            name: "Portfolio",
            url: "#portfolio",
        },
        {
            name: "Contact",
            url: "#contact",
        },
    ]

    return (
        <div className="flex items-center gap-30">
            {navigationItem.map((item, key) => (
                <div key={key} className="desktop_menu">
                    <Link href={item.url} className="menu-item euppercase font-semibold text-[18px] leading-[24px   ] text-body-color relative">
                        {item.name}
                    </Link>
                </div>
            ))}
            <div>
                <Link target="_blank" href="./documents/Ravi_Usadad.pdf" className="cv_button relative inline-block text-center uppercase font-semibold text-[13px] leading-[20px] z-[2] text-secondary px-20 py-15 rounded-md bg-gradient-box transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
                    Download CV
                </Link>
            </div>
            <style global jsx>{`
                .desktop_menu .menu-item::before {
                    display: block;
                    position: absolute;
                    top: calc(100% + 2px);
                    left: 0;
                    width: 100%;
                    border-bottom: 1px solid #ccc;
                    content: "";
                    transition: transform .6s cubic-bezier(.28,.75,.22,.95);
                    transform: scaleX(0);
                    transform-origin: right center;
                    border-color: red;
                }
                .desktop_menu .menu-item:hover::before{
                    transform: scale(1);
                    transform-origin: left center;
                }
            `}</style>
        </div>
    )
}