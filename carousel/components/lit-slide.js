import { LitElement, html, css } from '../web_modules/lit-element.js'

export class LitSlide extends LitElement {
  static get styles() {
    return css`
      header {
        padding: 10px;
        color: gray;
				font-style: italic;
				border: 1px solid #ccc
      }
    `
  }

  render() {
    return html`
      <header>
        <slot></slot>
      </header>
    `
  }
}

customElements.define('lit-slide', LitSlide)