export class Card extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const headerText = this.getAttribute('header')
      ? this.getAttribute('header')
      : 'Header Text'
    const bodyText = this.getAttribute('body')
      ? this.getAttribute('body')
      : 'Body Text'
    const imgSrc = this.getAttribute('image')
      ? this.getAttribute('image')
      : './images/placeholder.svg'
    const linkUrl = this.getAttribute('link-url')
      ? this.getAttribute('link-url')
      : '#'
    const linkLabel = this.getAttribute('link-label')
      ? this.getAttribute('link-label')
      : 'Card Link'

    this.innerHTML = `
      <section class="card">
        <img class="card-img-top" src="${imgSrc}" alt="" />
        <div class="card-body">
          <h3>${headerText}</h3>
          <p class="card-text">${bodyText}</p>
          <a
            class="btn btn-primary"
            href="${linkUrl}"
            aria-label="${linkLabel}"
          >
            <span aria-hidden="true">GitHub Repository</span>
          </a>
        </div>
      </section>
    `
  }
}

customElements.define('jr-card', Card)
