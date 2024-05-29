import "server-only";

const url = "https://en.wikipedia.org/w/api.php?";

export default async function getWikiResults(searchString: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrlimit: "10",
    gsrsearch: searchString,
    prop: "pageimages|extracts",
    exchars: "1000",
    exintro: "true",
    explaintext: "true",
    format: "json",
    origin: "*",
  });

  const res = await fetch(url + searchParams);
  if (!res.ok) return undefined;
  return res.json();
}
