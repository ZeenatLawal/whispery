export async function apiFetch<T>({
  path,
  data = {},
  method = "POST",
}: {
  path: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}) {
  const baseUrl = "https://darrol-backend.onrender.com/v1";

  return fetch(`${baseUrl}${path}`, {
    method,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: method !== "GET" ? JSON.stringify(data) : undefined,
  })
    .then(async (e) => {
      if (!e.ok) {
        return Promise.reject(await e.json());
      }
      return e.json();
    })
    .then((e) => Promise.resolve<T>(e));
}
