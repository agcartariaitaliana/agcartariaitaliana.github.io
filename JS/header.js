// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="/index.html" class="nav__menu--left">
            <img style="width: 128px; height: auto" src="/Images/liit.svg" alt="Logo LiiT">
        </a>
        <div class="nav__menu--right">
            <a href="javascript:history.back()">Indietro</a>
        </div>
        `
    }
}
window.customElements.define('app-header', AppHeader)