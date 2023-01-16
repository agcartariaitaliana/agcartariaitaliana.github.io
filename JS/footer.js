class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h3>Discover our <a class="typography__title--accent" href="/index.html">products</a>.</h3>
            <br>
            <h3>Do you have any other questions? Write us an email at <a class="typography__title--accent" href="mailto:info@cartariaitaliana.it">info@cartariaitaliana.it</a> or call us at <a class="typography__title--accent" href="tel:023542189">+39 02 354 2189</a></h3>
            <br>
            <p>Cartaria Italiana srl via Giotto, 28 20032 Cormano (Milano) - Italia</p>
        `
    }
}

window.customElements.define('app-footer', AppFooter)