interface SearchResult {
  query?: {
    pages?: Result[];
  };
}

interface Result {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    height: number;
    width: number;
  };
}
