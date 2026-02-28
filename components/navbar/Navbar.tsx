"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import Account from "./Account";
import { LanguageSwitcher } from "../global/LanguageSwitcher";
import { ModeToggle } from "../global/ModeToggle";
import Searchicon from "./Searchicon";
import Searchbar from "./Searchbar";
import ShopingCard from "./ShopingCard";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className="flex border-b-2 items-center p-4 justify-between px-10 max-sm:px-4 max-lg:px-5 sticky top-0 z-50 bg-white dark:bg-black  ">
      {!isSearchActive ? (
        <>
          <div className="flex items-center gap-2 max-sm:gap-4">
            <MobileMenu />
            <Logo />
          </div>
          <Links />
          <div className="flex gap-2 max-sm:gap-1 items-center">
            <div className="max-lg:hidden flex items-center gap-0">
              <LanguageSwitcher />
              <ModeToggle />
            </div>
            <ShopingCard/>
      
            <Searchicon onClick={() => setIsSearchActive(true)} />
            <Account />
          </div>
        </>
      ) : (
        <Searchbar onClose={() => setIsSearchActive(false)} />
      )}
    </div>
  );
}

export default Navbar;
