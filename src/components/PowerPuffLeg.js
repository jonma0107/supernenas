class PowerPuffLeg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 50px;
        --height: 20px;

        width: var(--width);
        height: var(--height);
        display: flex;
        background: #fff;
      }

      :host(.up){

      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PowerPuffLeg.styles}</style>
    <div class="shoe">
      <div class="sock"></div>
    </div>`;
  }
}

customElements.define("power-puff-leg", PowerPuffLeg);
