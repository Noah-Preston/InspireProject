export default class Quote {
  constructor(data) {
    this.author = data.quote.author
    this.body = data.quote.body
  }

  get qTemplate() {
    return `
    <p class="bg-light">${this.body} source: ${this.author}</p>
    `
  }
}