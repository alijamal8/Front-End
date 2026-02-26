import { getToken } from "@/lib/auth/token";
import { handleUnauthorized } from "@/services/api/authSession";

type ApiFetchInit = RequestInit & {
  withAuth?: boolean;
  skipAuthLogout?: boolean;
};

export async function apiFetch(
  input: RequestInfo | URL,
  init: ApiFetchInit = {},
): Promise<Response> {
  const { withAuth = true, skipAuthLogout = false, headers, ...rest } = init;
  const finalHeaders = new Headers(headers);

  if (withAuth) {
    const token = getToken();

    if (token && !finalHeaders.has("Authorization")) {
      finalHeaders.set("Authorization", `Bearer ${token}`);
    }
  }

  const response = await fetch(input, {
    ...rest,
    headers: finalHeaders,
  });

  if (response.status === 401 && !skipAuthLogout) {
    handleUnauthorized();
  }

  return response;
}
