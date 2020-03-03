/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../components/lit-carousel';

/**
 * @typedef {import('../src/lit-carousel').LitCarousel} LitCarousel
 */

describe('carousel compoent', () => {
  it('has by default an empty string as label', async () => {
    const el = /** @type {LitCarousel} */ (await fixture('<lit-carousel></lit-carousel>'));
    expect(el.title).to.equal('');
  });

  // it('has a static shadowDom', async () => {
  //   const el = /** @type {LitCarousel} */ (await fixture(html`
  //     <lit-carousel></lit-carousel>
  //   `));
  //   expect(el).shadowDom.to.equal(`
  //   <slot name="slides"></slot>
  // `);
  // });



});
