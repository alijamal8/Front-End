"use client";
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
import Link from "next/link";
import { useTranslations } from "next-intl";

 function Account() {
  const t =  useTranslations("navbar");
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <User className="hover:cursor-pointer border-0" />
          </MenubarTrigger>
          <MenubarContent className="mr-20 max-sm:mr-10">
            <MenubarItem>{t("account")}</MenubarItem>

            <MenubarSeparator />
            <Link href={"/register"}>
              <MenubarItem>
                {t("login")} / {t("register")}
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

export default Account;
