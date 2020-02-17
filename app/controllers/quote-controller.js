import QuoteService from "../services/quote-service.js";
import store from "../store.js";
import quoteService from "../services/quote-service.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

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
