"use client";

import React, { useState } from "react";
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
import { useParams } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

function Account() {
  const t = useTranslations("navbar");
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "ar";
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const [isAccountDialogOpen, setIsAccountDialogOpen] = useState(false);

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <User className="hover:cursor-pointer border-0" />
          </MenubarTrigger>

          <MenubarContent className="mr-20 max-sm:mr-10">
            {isAuthenticated ? (
              <>
                <MenubarItem onSelect={() => setIsAccountDialogOpen(true)}>
                  {t("account")}
                </MenubarItem>

                <Link href={`/${locale}/orders`}>
                  <MenubarItem>{t("orders")}</MenubarItem>
                </Link>

                <MenubarSeparator />
                <MenubarItem onClick={logout}>{t("logout")}</MenubarItem>
              </>
            ) : (
              <>
                <Link href={`/${locale}/login`}>
                  <MenubarItem>{t("login")}</MenubarItem>
                </Link>
                <Link href={`/${locale}/register`}>
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
