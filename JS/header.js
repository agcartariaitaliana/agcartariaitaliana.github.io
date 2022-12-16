class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="/index.html" class="nav__menu--left">
            <img style="width: 128px; height: auto" src="/Images/liit.svg" alt="Logo LiiT">
        </a>
        <ul class="nav__menu--right">
            <li class="corners button button__small button__tertiary"><a href="/prodotti.html">Prodotti</a></li>
            <li class="corners button button__small button__tertiary"><a href="/servizi.html">Servizi</a></li>
        </ul>
        `
    }
}



window.customElements.define('app-header', AppHeader)