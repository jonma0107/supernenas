import "./PowerPuffGirl.js";

class BubblesPowerPuffGirl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host {

     }
   `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
   <style>${BubblesPowerPuffGirl.styles}</style>
   <div class="container">
    <power-puff-girl class="bubbles"></power-puff-girl>
   </div>`;
  }
}

customElements.define("bubbles-power-puff-girl", BubblesPowerPuffGirl);
