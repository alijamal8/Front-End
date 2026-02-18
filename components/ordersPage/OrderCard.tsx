import StatusBadge from "@/components/ordersPage/StatusBadge";

type OrderCardProps = {
  id: number;
  total_price: number;
  order_status: string;
  created_at: string;
};

const formatPrice = (value: number) => `${value.toLocaleString("en-US")} IQD`;

export default function OrderCard({
  id,
  total_price,
  order_status,
  created_at,
}: OrderCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-sm sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold sm:text-lg">طلب #{id}</h2>
          <p className="mt-1 text-sm text-muted-foreground">تاريخ الطلب: {created_at}</p>
        </div>
        <StatusBadge status={order_status} />
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold">السعر الكلي: {formatPrice(total_price)}</p>
      </div>
    </article>
  );
}
