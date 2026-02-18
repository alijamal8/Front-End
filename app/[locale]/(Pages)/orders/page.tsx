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
        setOrders(data.message);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <OrdersPage orders={orders} isLoading={loading} isError={error} />;
}
