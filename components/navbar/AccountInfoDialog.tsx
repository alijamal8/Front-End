"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { authService } from "@/services/api/auth";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type AccountInfoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AccountInfoDialog({
  open,
  onOpenChange,
}: AccountInfoDialogProps) {
  const t = useTranslations("navbar.accountDialog");

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authService.getCurrentUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md min-h-[580px]">
        <DialogHeader>
          <DialogTitle className="mt-4 text-2xl font-bold">
            {t("title")}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 rounded-lg border border-border bg-muted/30 p-4 text-sm min-h-[380px]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{t("nameLabel")}</span>
            <span className="font-medium text-foreground">{user?.name}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">
              {t("accountTypeLabel")}
            </span>
            <span className="font-medium text-foreground">{user?.role}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{t("phoneLabel")}</span>
            <span className="font-medium text-foreground">{user?.phone}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{t("emailLabel")}</span>
            <span className="font-medium text-foreground">{user?.email}</span>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => onOpenChange(false)}>
            {t("close")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
