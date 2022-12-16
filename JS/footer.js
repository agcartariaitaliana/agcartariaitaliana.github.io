class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h3>Scopri i nostri <a class="typography__title--accent" href="/prodotti.html">prodotti</a> e il nostro <a class="typography__title--accent" href="/servizi.html">servizio</a> di dropshipping.</h3>
            <br>
            <h3>Hai altre domande? Scrivici un’email a <a class="typography__title--accent" href="mailto:info@cartariaitaliana.it">info@cartariaitaliana.it</a> o telefonaci al numero <a class="typography__title--accent" href="tel:023542189">+39 02 354 2189</a></h3>
            <br>
            <p>LiiT srl via Giotto, 28 20032 Cormano (Milano) - Italia</p>
        `
    }
}

window.customElements.define('app-footer', AppFooter)