import React, { useEffect, useState } from "react";
import Logo from "../logo";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";

export default function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 90);
        });
    }, []);

    return (
        <div className={scroll ? "is-sticky md:py-20 md:px-50 p-15 flex items-center justify-between gap-30 bg-body-color z-50 sticky top-0 shadow-md" : "bg-black md:py-20 md:px-50 p-15 flex items-center justify-between gap-30 z-50"}>
            <Logo />
            <div className="lg:block hidden">
                <Navigation />
            </div>
            <div className="lg:hidden block">
                <MobileNavigation />
            </div>
            <style>{`
                .is-sticky .logo span{
                    color: #1e2125;
                }
                .is-sticky .desktop_menu a{
                    color: #3c3e41;
                }
                .is-sticky .cv_button{
                    box-shadow: 5px 5px 15px #d1d9e6,-5px -5px 15px #fff;;
                }
            `}</style>
        </div>
    )
}