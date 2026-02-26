"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import AuthGateLoader from "@/components/auth/AuthGateLoader";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "ar";
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  useEffect(() => {
    if (!isHydrated || isLoading) {
      return;
    }

    if (!isAuthenticated) {
      router.replace(`/${locale}/login`);
    }
  }, [isAuthenticated, isHydrated, isLoading, locale, router]);

  if (!isHydrated || isLoading) {
    return <AuthGateLoader />;
  }

  if (!isAuthenticated) {
    return <AuthGateLoader />;
  }

  return <>{children}</>;
}
