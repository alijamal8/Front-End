
import { useTranslations } from "next-intl";

export default function OrdersError() {
  const t = useTranslations("orders");

  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center dark:border-rose-900 dark:bg-rose-950/30">
      <p className="mb-4 text-sm font-medium text-rose-700 dark:text-rose-300">
        {t("loadError")}
      </p>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
      >
        {t("retry")}
      </button>
    </div>
  );
}
