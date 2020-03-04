import { LitElement, html, css } from '../web_modules/lit-element.js'
import * as d3 from 'https://unpkg.com/d3?module'

export class LitSlide extends LitElement {
	static get properties() {
    return {
      dataset: { type: Array },
    }
	}

	constructor() {
		super()
		this.dataset = this.dataset
	}
	
  static get styles() {
    return css`
      header {
        padding: 10px;
        background: gray;
				border: 1px solid #ccc;
				width: 200px;
				heigth: 200px;
      }
    `
	}

	draw() {

		const self = this
		const pie = d3.layout.pie(this.dataset)

		const w = 300
		const h = 300
		const outerRadius = w/2
		const innerRadius = 0
		const arc = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius)
		
		const svg = d3.select(self)
		.append('svg')
		.attr('width',w)
		.attr('height',h)

		const arcs = svg.selectAll('g.arc')
		.data(pie(dataset))
		.enter()
		.append('g')
		.attr('class','arc')
		.attr('transform', `translate(${outerRadius}, ${outerRadius})`)

		arcs.append('path')
		.attr('fill', (d,i) => color(i))
		.attr('d', arc)

	}

  render() {
    return html`
      <header>
        <slot>${this.dataset}</slot>
      </header>
    `
  }
}

customElements.define('lit-slide', LitSlide)