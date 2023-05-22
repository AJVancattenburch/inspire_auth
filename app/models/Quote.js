export class Quote {
  constructor(data) {
    this.author = data.author
    this.description = data.description
    this.content = data.content
  }

  get QuoteTemplate() {
    return /*html*/`
    <div class="quote-card card bg-dark offset-6">
      <div class="card-body">
        <h5 class="card-title text-light text-center">${this.content}</h5>
        <i><p class="author-reveal card-text text-dark bg-dark text-muted text-end">~ ${this.author}</p></i>
      </div>
    </div>
    `
  }
}