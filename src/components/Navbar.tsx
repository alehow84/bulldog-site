"use client";

import BurgerMenu from "./burgerMenu/BurgerMenu";
import HomeButton from "./static/HomeButton";
import PageLink from "./PageLink";
import MobileLogo from "../../public/icons/mobileLogo.svg";
import DesktopLogo from "../../public/icons/desktopLogo.svg";
import Menu from "./burgerMenu/Menu";

import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useEffect } from "react";

export default function Navbar() {
  const { isMenuOpen, exitMenu } = useGlobalState();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    window.addEventListener("resize", exitMenu);

    return () => {
      window.removeEventListener("resize", exitMenu);
    };
  }, [isMenuOpen, exitMenu]);

  return (
    <>
      <nav className=" md:hidden fixed z-20 flex justify-evenly p-1 w-screen bg-black">
        <BurgerMenu />
        <div className="md:hidden">
          <HomeButton size={80} logo={MobileLogo} />
        </div>
        <PageLink path="/contact" name="Contact" textSize="medium" />
      </nav>
      {isMenuOpen ? <Menu /> : <></>}
      <div className="hidden md:block">
        <nav className="flex flex-row fixed z-20 justify-evenly p-3 w-screen bg-black">
          <PageLink path="/projects" name="Projects" textSize="medium" />
          <PageLink path="/about" name="About Us" textSize="medium" />
          <div
            className="
          "
          >
            <HomeButton size={250} logo={DesktopLogo} />
          </div>
          <PageLink
            path="/property-enquiries"
            name="Property Enquiries"
            textSize="medium"
          />
          <PageLink path="/for-sale" name="For Sale" textSize="medium" />
          <PageLink path="/contact" name="Contact" textSize="medium" />
        </nav>
      </div>
    </>
  );
}
