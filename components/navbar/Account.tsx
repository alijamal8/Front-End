"use client";

import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import AccountInfoDialog from "@/components/navbar/AccountInfoDialog";
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
  const t = useTranslations("navbar");
  const [isAuth, setIsAuth] = useState(false);
  const [isAccountDialogOpen, setIsAccountDialogOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(token ? true : false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <User className="hover:cursor-pointer border-0" />
          </MenubarTrigger>

          <MenubarContent className="mr-20 max-sm:mr-10">
            {isAuth ? (
              <>
                <MenubarItem onSelect={() => setIsAccountDialogOpen(true)}>
                  {t("account")}
                </MenubarItem>

                <Link href="/orders">
                  <MenubarItem>{t("orders")}</MenubarItem>
                </Link>

                <MenubarSeparator />
                <MenubarItem onClick={logout}>{t("logout")}</MenubarItem>
              </>
            ) : (
              <>
                <Link href="/login">
                  <MenubarItem>{t("login")}</MenubarItem>
                </Link>
                <Link href="/register">
                  <MenubarItem>{t("register")}</MenubarItem>
                </Link>
              </>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <AccountInfoDialog
        open={isAccountDialogOpen}
        onOpenChange={setIsAccountDialogOpen}
      />
    </>
  );
}

export default Account;
