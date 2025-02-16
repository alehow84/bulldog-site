"use client";
import React, { createContext, useState, useContext } from "react";
import { GlobalState } from "@/types/GlobalTypes";
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
}

export function GlobalStateProvider({ children }: { children: any }) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  const exitMenu = (): void => {
    setMenuOpen(false);
  };

  const value: GlobalState = {
    isMenuOpen,
    toggleMenu,
    exitMenu,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}
