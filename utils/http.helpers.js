export async function fetchData(input, init) {
  const res = await fetch(input, init);
  return res.json();
}

export async function postData(url, data) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error(`Request Failed: ${res.status}!`);

  return res;
}
