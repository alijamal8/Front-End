import { useTranslations } from "next-intl";

export default function EmptyOrders() {
  const t = useTranslations("orders");

  return (
    <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center text-card-foreground">
      <p className="text-base font-medium">{t("empty")}</p>
    </div>
  );
}
