/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../components/lit-carousel';


describe('carousel compoent', () => {
  it('has by default an empty string as title', async () => {
    const el = (await fixture('<lit-carousel></lit-carousel>'));
    expect(el.title).to.equal('');
  });

  // it('has a static shadowDom', async () => {
  //   const el = (await fixture(html`
  //     <lit-carousel></lit-carousel>
  //   `));
  //   expect(el).shadowDom.to.equal(`
  //   <slot name="slides"></slot>
  // `);
  // });



   it('should display paragraph if no data', async () => {
    const el = (await fixture(html`
      <lit-carousel></lit-carousel>
    `));
    expect(el).lightDom.to.equal(`
      <p class="visually-hidden">Click, mousewheel or use your keyboard cursor keys</p>
    `);
  });



  // Testing a single unit of logic can be achieved by instantiating the class
  // it("returns default text", () => {
  //   const component = new LitCarousel();
  //   expect(component.getDefaultText()).toEqual("Hello, World!");
  // });



  

  // it('has 1 input and 1 label in light-dom', async () => {
  //   const el = (await fixture(html`
  //     <lit-carousel .label=${'foo'}></lit-carousel>
  //   `));
  //   expect(el).lightDom.to.equal(`
  //     <label slot="label">foo</label>
  //     <input slot="input">
  //   `);
  // });

  // it('can set/get the input value directly via the custom element', async () => {
  //   const el = (await fixture(html`
  //     <lit-carousel .value=${'foo'}></lit-carousel>
  //   `));
  //   expect(el.value).to.equal('foo');
  // });

  // it('can update its label', async () => {
  //   const el = (await fixture('<lit-carousel label="foo"></lit-carousel>'));
  //   expect(el.label).to.equal('foo');
  //   el.label = 'bar';
  //   expect(el.label).to.equal('bar');
  // });
});
