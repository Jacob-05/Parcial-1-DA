class CardComponent extends HTMLElement {
    static get ObservedAtributes () {
        return ['img', 'title', 'subtitle1', 'subtitle2', 'subtitle3', 'subtitle4'];
    };

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    };

    connectedCallback() {
        this.render();
    };

    AtributeChangedCallback (name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    };

    render () {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style.css">
    <div id="card" class="container">
        <img src="https://picsum.photos/200" alt="">
        <p>París, Francia</p>
        <p>2 semanas</p>
        <p>2500 usd</p>
        <p>"Explora la ciudad del amor con visitas a la Torre Eiffel y el Louvre."</p>
        <p>["Tour guiado", "Cena en barco por el Sena", "Museos"]</p>
        <div id="Boton">Reservado
            <button>Si</button>
        </div>
    </div>
        `;
    };
};


customElements.define('card-component', CardComponent)
export default(CardComponent)