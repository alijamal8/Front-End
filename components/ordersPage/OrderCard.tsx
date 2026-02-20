import StatusBadge from "@/components/ordersPage/StatusBadge";
import { Order } from "@/types/order";
import { useLocale, useTranslations } from "next-intl";

type OrderCardProps = Order;

const formatPrice = (value: number) => `${value.toLocaleString("en-US")} IQD`;

const formatOrderDate = (value: string, locale: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString(locale === "ar" ? "ar-IQ" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function OrderCard({
  id,
  total_price,
  order_status,
  created_at,
  payment,
  items,
}: OrderCardProps) {
  const t = useTranslations("orders");
  const locale = useLocale();
  const paymentMethodLabel = t.has(`paymentMethods.${payment?.payment_method}`)
    ? t(`paymentMethods.${payment?.payment_method}`)
    : payment?.payment_method;
  const paymentStatusLabel = t.has(`paymentStatuses.${payment?.payment_status}`)
    ? t(`paymentStatuses.${payment?.payment_status}`)
    : payment?.payment_status;

  return (
    <article className="rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-sm sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold sm:text-lg">
            {t("orderNumber")} #{id}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("orderDate")}: {formatOrderDate(created_at, locale)}
          </p>
        </div>
        <StatusBadge status={order_status} />
      </div>
      <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
        <p>
          {t("paymentMethod")}: {paymentMethodLabel}
        </p>
        <p>
          {t("paymentStatus")}: {paymentStatusLabel}
        </p>
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="mb-3 text-sm font-semibold text-foreground">
          {t("orderDetails")}
        </p>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={`${item.product_name}-${index}`}
              className="flex flex-wrap items-center justify-between gap-2 text-sm"
            >
              <p className="font-medium">{item.product_name}</p>
              <p className="text-muted-foreground">
                {item.quantity} x {formatPrice(item.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold">
          {t("totalPrice")}: {formatPrice(total_price)}
        </p>
      </div>
    </article>
  );
}
