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
				border: 1px solid #ccc;
      }
    `
	}

	draw() {

		const self = this
		const pie = d3.pie(this.dataset)

		const w = 300
		const h = 300
		const outerRadius = w/2
		const innerRadius = w/3
		const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)
		const color = d3.scaleOrdinal().range(['#0075B4', '#70B5DC']);

		const svg = d3.select(self)
		.append('svg')
		.attr('width',w)
		.attr('height',h)
		// set wedge groups
		const arcs = svg.selectAll('g.arc')
		.data(pie(this.dataset))
		.enter()
		.append('g')
		.attr('class','arc')
		.attr('transform', `translate(${outerRadius}, ${outerRadius})`)
		// draw arc paths
		arcs.append('path')
		.attr('fill', (d,i) => color(i))
		.attr('d', arc)
		
	}

  render() {
    return html`
      <header>
        <slot>${this.dataset}${this.draw()}</slot>
      </header>
    `
  }
}

customElements.define('lit-slide', LitSlide)