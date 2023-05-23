const baseUrl = 'jasonrahm00.github.io'

export class MainNav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-sm fixed-top bg-dark" data-bs-theme="dark">
        <div class="container-fluid justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/${baseUrl}" class="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/${baseUrl}/projects" class="nav-link">
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `
  }
}

customElements.define('jr-main-nav', MainNav)
