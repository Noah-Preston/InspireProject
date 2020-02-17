import QuoteService from "../services/quote-service.js";
import store from "../store.js";
import quoteService from "../services/quote-service.js";

function drawQ() {
  let quote = store.State.quote
  let template = quote.qTemplate
  document.getElementById("quote-info").innerHTML = template
}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQ)
    this.getQ()
  }
  getQ() {
    quoteService.getQ()
  }

}
