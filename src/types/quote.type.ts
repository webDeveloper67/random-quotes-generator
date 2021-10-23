export default interface IQuoteData {
  id?: any | null;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
}
