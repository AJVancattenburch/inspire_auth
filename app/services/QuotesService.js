import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";
class QuotesService {
  constructor() {
    console.log("Quotes Service...you there?");

  }

  async getQuotes() {
    const res = await api.get('api/quotes')
    AppState.quotes = new Quote(res.data)
    console.log(res.data)
  }
















}

export const quotesService = new QuotesService();