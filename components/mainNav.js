const currentPage = window.location.href

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
              <li class="nav-item">
                <a href="index.html" class="nav-link p-2">
                  <span>Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="projects.html" class="nav-link p-2">
                  <span>Projects</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `
  }
}

customElements.define('jr-main-nav', MainNav)
