import OrdersError from "@/components/ordersPage/OrdersError";
import OrdersList from "@/components/ordersPage/OrdersList";
import OrdersSkeleton from "@/components/ordersPage/OrdersSkeleton";
import { Order } from "@/types/order";

// const demoOrders: Order[] = [
//   {
//     id: 10234,
//     total_price: 245000,
//     order_status: "delivered",
//     created_at: "2026-01-20",
//   },
//   {
//     id: 10210,
//     total_price: 138000,
//     order_status: "processing",
//     created_at: "2026-01-14",
//   },
// ];

type OrdersPageProps = {
  orders: Order[];
  isLoading: boolean;
  isError: boolean;
};

export default function OrdersPage({
  orders,
  isLoading,
  isError,
}: OrdersPageProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-[#f8f9fa] p-5 dark:bg-black sm:p-6">
        <h1 className="mb-6 text-2xl font-bold text-foreground">طلباتي</h1>

        {isLoading ? <OrdersSkeleton /> : null}
        {!isLoading && isError ? <OrdersError /> : null}
        {!isLoading && !isError ? <OrdersList orders={orders} /> : null}
      </div>
    </section>
  );
}
