import { quotesService } from "../services/QuotesService.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";

function _drawQuotes() {
  const quotes = AppState.quotes
  setHTML('quotes', quotes.QuoteTemplate)
}
export class QuotesController {
  constructor() {
    console.log("Quotes Controller workin iiiiit");
    AppState.on('quotes', _drawQuotes)
    this.getQuotes()

  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'No quotes for you!')
    }
  }












}