/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing'

import '../components/lit-carousel'

describe('carousel compoent', () => {
  it('has by default an empty string as title', async () => {
    const el = await fixture('<lit-carousel></lit-carousel>')
    expect(el.title).to.equal('')
  })

  //  it('should display paragraph if no data', async () => {
  //   const el = (await fixture(html`
  //     <lit-carousel></lit-carousel>
  //   `));
  //   expect(el).lightDom.to.equal(`
  //     <p class="visually-hidden">Click, mousewheel or use your keyboard cursor keys</p>
  //   `);
  // });
})
