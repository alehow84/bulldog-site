"use client";

import Burger from "./Burger";
import Menu from "./Menu";
import Close from "./Close";

import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useEffect } from "react";

export default function BurgerMenu() {
  const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();

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
    <div className="md:hidden my-auto" onClick={toggleMenu}>
      {isMenuOpen ? <Close /> : <Burger />}
    </div>
  );
}
