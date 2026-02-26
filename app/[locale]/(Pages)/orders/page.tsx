"use client";
import OrdersPage from "@/components/ordersPage/OrdersPage";
import { OrderService } from "@/services/api/order";
import { Order } from "@/types/order";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import { useEffect, useState } from "react";

function OrdersContent() {
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

  return <OrdersPage orders={orders} isLoading={loading} isError={error} />;
}

export default function page() {
  return (
    <ProtectedRoute>
      <OrdersContent />
    </ProtectedRoute>
  );
}
