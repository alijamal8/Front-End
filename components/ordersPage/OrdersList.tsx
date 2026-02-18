import EmptyOrders from "@/components/ordersPage/EmptyOrders";
import OrderCard from "@/components/ordersPage/OrderCard";
import { Order } from "@/types/order";

type OrdersListProps = {
  orders?: Order[];
};

export default function OrdersList({ orders = [] }: OrdersListProps) {
  if (orders.length === 0) {
    return <EmptyOrders />;
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </div>
  );
}
