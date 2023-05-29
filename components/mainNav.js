const pages = [
  { url: 'index.html', linkText: 'home' },
  { url: 'projects.html', linkText: 'projects' },
]

const linkList = (() => {
  let list = ''
  pages.forEach((page) => {
    list += `
      <li class="nav-item">
        <a href="${page.url}" class="nav-link text-capitalize p-2">
          ${page.linkText}
        </a>
      </li>
    `
  })
  return list
})()

export class MainNav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar fixed-top bg-dark" data-bs-theme="dark">
        <div class="container">
          <div class="container-fluid d-flex ps-0">
            <a href="index.html" class="navbar-brand">Jason Rahm</a>
            <ul class="navbar-nav flex-row">
              ${linkList}
            </ul>
          </div>
        </div>
      </nav>
    `
  }
}

customElements.define('jr-main-nav', MainNav)
