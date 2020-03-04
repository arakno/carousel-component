import { LitElement, html, css } from '../web_modules/lit-element.js'
import * as d3 from 'https://unpkg.com/d3?module'

export class LitSlide extends LitElement {
	static get properties() {
		return {
			dataset: {
				type: Object
			},
		}
	}

	constructor() {
		super()
		this.dataset = this.dataset
	}

	static get styles() {
		return css `
      header {
        padding: 10px;
				border-bottom: 1px solid #ccc;
      }
    `
	}

	draw() {

		const self = this
		
		const pie = d3.pie(this.dataset.data)

		const w = 300
		const h = 300
		const outerRadius = w / 2
		const innerRadius = w / 2.3
		const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)
		const color = d3.scaleOrdinal().range(['#0075B4', '#70B5DC']);

		const svg = d3.select(self)
			.append('svg')
			.attr('width', w)
			.attr('height', h)
		// set wedge groups
		const arcs = svg.selectAll('g.arc')
			.data(pie(this.dataset.data))
			.enter()
			.append('g')
			.attr('class', 'arc')
			.attr('transform', `translate(${outerRadius}, ${outerRadius})`)
		// draw arc paths
		arcs.append('path')
			.attr('fill', (d, i) => color(i))
			.attr('d', arc)

		svg.append('text')
			.attr('text-anchor', 'middle')
			.text(this.dataset.title)
	}

	render() {
		return html `
      <header>
        <slot>${this.draw()}</slot>
      </header>
    `
	}
}

customElements.define('lit-slide', LitSlide)