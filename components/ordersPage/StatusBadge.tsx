type StatusBadgeProps = {
  status: string;
};

const statusLabelMap: Record<string, string> = {
  pending: "قيد الانتظار",
  processing: "قيد المعالجة",
  delivered: "تم التسليم",
  cancelled: "ملغي",
};

const statusClassMap: Record<string, string> = {
  pending:
    "bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-800/60",
  processing:
    "bg-sky-100 text-sky-700 ring-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:ring-sky-800/60",
  delivered:
    "bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-800/60",
  cancelled:
    "bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:ring-rose-800/60",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const key = status.trim().toLowerCase();
  const label = statusLabelMap[key] ?? status;
  const tone =
    statusClassMap[key] ??
    "bg-muted text-muted-foreground ring-border dark:bg-muted dark:text-muted-foreground";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${tone}`}
    >
      {label}
    </span>
  );
}
