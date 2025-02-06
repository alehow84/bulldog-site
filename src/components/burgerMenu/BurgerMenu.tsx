"use client";

import Burger from "./Burger";
import Menu from "./Menu";
import Close from "./Close";

//create and import global state context function that checks the state of if menu is open or closed
import { useEffect } from "react";

export default function BurgerMenu() {
  //extract isMenuOpen, toggleMenu and exitMenu from global state
  //create a useEffect that listens to isMenuOpen and exitMenu states
  //purpose of use effect is to amend styling to hide overflow of y depending on whether menu is open
  //dont forget cleanup function to remove the remove the added eventListener
  //return
}
