"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

type AccountInfoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AccountInfoDialog({
  open,
  onOpenChange,
}: AccountInfoDialogProps) {
  const t = useTranslations("navbar.accountDialog");

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
            <span className="font-medium text-foreground">
              {t("nameValue")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">
              {t("accountTypeLabel")}
            </span>
            <span className="font-medium text-foreground">
              {t("accountTypeValue")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{t("phoneLabel")}</span>
            <span className="font-medium text-foreground">
              {t("phoneValue")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{t("emailLabel")}</span>
            <span className="font-medium text-foreground">
              {t("emailValue")}
            </span>
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
