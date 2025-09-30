import React from "react";
import { User } from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";

function Account() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <User className="hover:cursor-pointer border-0" />
          </MenubarTrigger>
          <MenubarContent className=" mr-20">
            <MenubarItem>My Account</MenubarItem>

            <MenubarSeparator />
            <MenubarItem>Login / Register</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

export default Account;
