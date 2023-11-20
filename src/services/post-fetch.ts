export async function postFetch<T>(url: string, data: T) {
  // return fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  //TODO - 🚀 DELETE console.log 🚀
  console.log("post-fetch-9-url. data =>", url, data);
  return Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      }),
  }) as unknown as Response;
}
