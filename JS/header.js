class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="/index.html" class="nav__menu--left">
            <img style="width: 128px; height: auto" src="/Images/liit.svg" alt="Logo LiiT">
        </a>
        `
    }
}



window.customElements.define('app-header', AppHeader)