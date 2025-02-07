"use client";

import BurgerMenu from "./burgerMenu/BurgerMenu";
import HomeButton from "./static/HomeButton";
import PageLink from "./PageLink";
import MobileLogo from "../../public/icons/mobileLogo.svg";
import MobLogo from "../../public/icons/mobileLogo2.svg";
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
      <nav className="fixed flex justify-evenly p-1 w-screen bg-black">
        <BurgerMenu />
        <div className="md:hidden">
          <HomeButton size={80} logo={MobileLogo} />
        </div>
        <PageLink path="/contact" name="Contact" />
      </nav>
      {isMenuOpen ? <Menu /> : <></>}
    </>
  );
}
