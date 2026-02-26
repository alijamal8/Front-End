import { useAuthStore } from "@/stores/authStore";

let isHandlingUnauthorized = false;

export function handleUnauthorized(): void {
  if (typeof window === "undefined") {
    return;
  }

  if (isHandlingUnauthorized) {
    return;
  }

  isHandlingUnauthorized = true;
  useAuthStore.getState().logout();

  window.setTimeout(() => {
    isHandlingUnauthorized = false;
  }, 150);
}
