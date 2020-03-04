import { LitElement, html, css } from '../web_modules/lit-element.js'

import './lit-slide.js'

export class LitCarousel extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      response: { type: Array }
    }
  }

  constructor() {
    super()
    this.title = ''
    this.response = []
  }

  static get styles() {
    return css`

    .carousel-wrapper {
      min-height: 100%;
      position: relative;
      overflow-x: hidden;
    }
    .carousel-slides {
      display: flex;
      margin: 10px;
      width: 100%;
      height: auto;
      cursor: pointer;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }

    @media only screen and (min-width: 320px) {
      body {
        font-size: 12px;
        font-size: 1.2rem;
      }
    }
    @media only screen and (min-width: 640px) {
      body {
        font-size: 16px;
        font-size: 1.6rem;
      }
      .carousel-wrapper {
        margin-top: 20px;
      }
    }


    .visually-hidden { 
      position: absolute !important;
      height: 1px; 
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
  }
    `
  }

  getData() {
 
      fetch('../data.json')
        .then(response => {
          return response.json()
        })
        .then(res => {
          this.response = res.stats
        })
        .catch(err => console.error(err))
  }

  connectedCallback() {
    super.connectedCallback()

    this.getData();
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }
  

  render() {
    const { response } = this
    return html`
      <div class="carousel-wrapper">
        <h2>${this.title}</h2>        
        <p class="visually-hidden">Click, mousewheel or use your keyboard cursor keys</p>
        <div class="carousel-slides">
        ${response
          ? html`${response.map(i => html`<lit-slide .dataset=${i}></lit-slide>`)}`
          : '<p>No slides were added!</p>'}
        </div>
      </div>
    `
  }
}