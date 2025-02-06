"use client";

import Burger from "./Burger";
import Menu from "./Menu";
import Close from "./Close";

import {
  GlobalStateProvider,
  useGlobalState,
} from "@/contexts/GlobalStateContext";
import { useEffect } from "react";

export default function BurgerMenu() {
  const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      window.removeEventListener("resize", exitMenu);
    };
  }, [isMenuOpen, exitMenu]);

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 p-2 z-50" onClick={toggleMenu}>
        {isMenuOpen ? <Close /> : <Burger />}
      </div>
      {isMenuOpen ? <Menu /> : <></>}
    </div>
  );
}
