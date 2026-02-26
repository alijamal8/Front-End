"use client";

import { useEffect, useRef } from "react";
import { useAuthStore } from "@/stores/authStore";

export function AuthBootstrap() {
  const hydrateFromStorage = useAuthStore((state) => state.hydrateFromStorage);
  const didBootstrap = useRef(false);

  useEffect(() => {
    if (didBootstrap.current) {
      return;
    }

    didBootstrap.current = true;
    void hydrateFromStorage();
  }, [hydrateFromStorage]);

  return null;
}
