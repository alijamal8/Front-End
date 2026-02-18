"use client";
import OrdersPage from "@/components/ordersPage/OrdersPage";
import { OrderService } from "@/services/api/order";
import { Order } from "@/types/order";

import { useEffect, useState } from "react";

export default function page() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await OrderService.getOrders();
        const parsedOrders = Array.isArray(data.data)
          ? data.data
          : Array.isArray(data)
            ? data
            : [];

        setOrders(parsedOrders);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  console.log(orders);

  return <OrdersPage orders={orders} isLoading={loading} isError={error} />;
}
