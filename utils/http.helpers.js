export async function fetchData(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
