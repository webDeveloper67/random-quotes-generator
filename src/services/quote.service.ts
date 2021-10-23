import http from "../http-common";
import IQuoteData from "../types/quote.type";

class QuoteDataService {
  getRandomQuote() {
    return http.get<IQuoteData[]>("/random");
  }
}

export default new QuoteDataService();
