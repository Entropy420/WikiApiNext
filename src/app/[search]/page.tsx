import getWikiResults from "../_lib/getWikiResults";
import ItemsList from "./_components/itemsList";
import "./search.scss";

type Props = {
  params: {
    search: string;
  };
};

export async function generateMetadata({ params: { search } }: Props) {
  // converting '%20' to spaces, as wikipedia api no longer return results for the former
  search = search.replaceAll("%20", " ");

  const wikiRes: Promise<SearchResult> = getWikiResults(search);
  const data = await wikiRes;
  const results = data?.query?.pages;

  if (!results) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: search,
    description: `Results For ${search}`,
  };
}

export default async function Search({ params: { search } }: Props) {
  // converting '%20' to spaces, as wikipedia api no longer return results for the former
  search = search.replaceAll("%20", " ");

  const wikiRes: Promise<SearchResult> = getWikiResults(search);
  const data = await wikiRes;
  const results = data?.query?.pages;

  const content = (
    <main className="search wrapper">
      {results ? (
        <ItemsList items={results} />
      ) : (
        <h2>"{search.replaceAll("%20", " ")}" Not Found</h2>
      )}
    </main>
  );

  return content;
}
