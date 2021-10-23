import React, { Component } from "react";
import IQuoteData from "../types/quote.type";
import QuoteDataService from "../services/quote.service";

type Props = {};
type State = {
  quote: Array<IQuoteData>;
};

class RandomQuote extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      quote: [],
    };
  }

  retrieveQuote = async () => {
    const res = await QuoteDataService.getRandomQuote();
    console.log(res.data);
    this.setState({ quote: res.data });
  };

  componentDidMount() {
    this.retrieveQuote();
  }
  render() {
    return <div>render quote</div>;
  }
}

export default RandomQuote;
