const n=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};n();class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        width: calc(var(--width) * 0.65);
        height: 100%;
        background: #fff;
        border: var(--border-size) solid #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      :host(.left) {
        transform: scaleX(-1);
      }
      .iris {
        width: 85%;
        height: 75%;
        border-radius: 50%;
        background: var(--power-puff-color);
        transform: translateX(calc(-1 * 15%));
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      .pupil {
        width: 87%;
        height: 82%;
        background: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
      }
      .shine {
        width: 32%;
        height: 30%;
        background: #fff;
        border-radius: 50%;
        transform: translateX(70%);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="iris">
      <div class="pupil">
        <div class="shine"></div>
      </div>
    </div>
    `}}customElements.define("power-puff-eye",o);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 225px;
        --height: calc(var(--width) + calc(var(--width) * 0.3));
        --skin-color: #f4cfb4;
        --border-size: 3px;
        --power-puff-color: #53a7e7;
      }
      .container {
        width: var(--width);
        height: var(--height);
        background: #222;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .head {
        width: 100%;
        height: 65%;
        border: var(--border-size) solid #000;
        border-radius: 50%;
        overflow: hidden;
        background: var(--skin-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        box-shadow: 0 3px 0 #0005;
        z-index: 5;
      }
      .hair {
        width: 100%;
        height: 40%;
        background:
          radial-gradient(ellipse 175px 150px at 15% -25%, #fcdb04 50%, transparent 51%),
          radial-gradient(ellipse 175px 150px at 85% -25%, #fcdb04 50%, transparent 51%),
          radial-gradient(ellipse 175px 150px at 15% -25%, #000 52%, transparent 53%),
          radial-gradient(ellipse 175px 150px at 85% -25%, #000 52%, transparent 53%);
        position: absolute;
        z-index: 10;
      }
      .eyes {
        --gap: 10%;
        display: flex;
        justify-content: space-between;
        gap: 0 var(--gap);
        width: calc(var(--width) * 1.2);
        height: calc(var(--width) * 0.6);
        transform: translateY(10%);
      }
      .mouth {
        width: 6%;
        height: 8%;
        border-radius: 50%;
        border: var(--border-size) solid #000;
        clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
      }
      .body-container {
        width: 30%;
        height:20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        filter:
          drop-shadow(2px 0 0 #000),
          drop-shadow(-2px 0 0 #000),
          drop-shadow(0 -2px 0 #000),
          drop-shadow(0 2px 0 #000);
        transform: translateY(-5%);
      }
      .body-container .body {
        width: 100%;
        height: 100%;
        clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);
        background:
          linear-gradient(
            to bottom,
            var(--power-puff-color) 0 27%,
            #000 28% 71%,
            var(--power-puff-color) 60% 100%
          );
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <div class="head">
        <div class="hair"></div>
        <div class="eyes">
          <power-puff-eye class="left"></power-puff-eye>
          <power-puff-eye class="right"></power-puff-eye>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="body-container">
        <div class="body"></div>
      </div>
      <div class="legs">
        <div class="left leg">
          <div class="shoe">
            <div class="sock"></div>
          </div>
        </div>
        <div class="right leg">
          <div class="shoe">
            <div class="sock"></div>
          </div>
        </div>
      </div>
    </div>`}}customElements.define("power-puff-girl",s);
