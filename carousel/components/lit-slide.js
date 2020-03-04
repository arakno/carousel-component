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
		const data = this.dataset.data
		const title = this.dataset.title
		const value = this.dataset.value
		const colors = this.dataset.colors

		const pie = d3.pie(data)

		const w = 300
		const h = 300
		const outerRadius = w / 2
		const innerRadius = w / 2.3
		const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)

		const svg = d3.select(self)
			.append('svg')
			.attr('width', w)
			.attr('height', h)

		const labels = svg.append("g")
			.attr("class", "labels")
			.attr('transform', `translate(${outerRadius}, ${outerRadius})`)
		
		labels.append('text')
			.attr('text-anchor', 'middle')
			.text(title)
			.style({'fill': 'red', 'font-size': '18px'})
		labels.append('text')
			.attr('text-anchor', 'middle')
			.attr('transform', `translate(${0}, ${20})`)
			.text(value)
			.style({'fill': 'red', 'font-size': '18px'})
		// set wedge groups
		const arcs = svg.selectAll('g.arc')
			.data(pie(data))
			.enter()
			.append('g')
			.attr('class', 'arc')
			.attr('transform', `translate(${outerRadius}, ${outerRadius})`)
		// draw arc paths
		arcs.append('path')
			.attr('fill', (d, i) => colors[i])
			.attr('d', arc)
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