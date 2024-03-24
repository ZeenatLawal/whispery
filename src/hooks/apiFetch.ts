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
      method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      redirect: "follow", // manual, *follow, error
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