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

    .wrapper {
      min-height: 100%;
      position: relative;
      overflow-x: hidden;
    }
    .carousel-nav {
      margin: 10px;
      width: 100%;
      height: 50px;
      cursor: pointer;
    }

    #carousel {
      display: inline-flex;
      text-align: center;
      margin: 0 auto;
    }

    @media only screen and (min-width: 320px) {
      body {
        font-size: 12px;
        font-size: 1.2rem;
      }
      .carousel-nav {
        display: inline;
      }
    }
    @media only screen and (min-width: 640px) {
      body {
        font-size: 16px;
        font-size: 1.6rem;
      }
      .wrapper > header {
        height: 200px;
      }
      #carousel {
        display: inline-block;
      }
      .carousel-content {
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
          console.log(res.stats)
          this.response = res.stats
          slides.init(response)
        })
        .catch(err => console.error(err))
  }

  connectedCallback() {
    super.connectedCallback()

    const self = this

    this.getData();

    document.addEventListener('DOMContentLoaded', function() {
      /**
       * @description helper functions for easy DOM manipulation
       * @param {string} selector 
       */
      const $ = function(selector) {
        var selectorType = 'querySelectorAll'

        if (selector.indexOf('#') === 0) {
          selectorType = 'getElementById'
          selector = selector.substr(1, selector.length)
        }
        return self.shadowRoot[selectorType](selector)
      }

      /** @{function} - helper method to iterate over nodeLists or array/objects */
      $.each = function(e, callback) {
        Array.prototype.forEach.call(e, callback)
      }

      /** @{function} - hleper method to attach events */
      Node.prototype.on = window.on = Node.prototype.addEventListener
      NodeList.prototype.on = NodeList.prototype.addEventListener = function(
        name,
        fn
      ) {
        Array.prototype.slice.call(this).forEach(function(elem) {
          elem.addEventListener(name, fn, false)
        })
      }

      /** @{function} - Convenience function for parent to match pattern for next() & previous() functions */
      Node.prototype.parent = function() {
        return this.parentNode
      }

      /** @{function} - Add next() prototype to get next node, not whitespace */
      Node.prototype.next = function() {
        var next = this.nextSibling
        while (next && next.nodeType != 1) {
          next = next.nextSibling
        }
        return next
      }

      /** @{function} - Add previous() prototype to get previous node, not whitespace */
      Node.prototype.previous = function() {
        var previous = this.previousSibling
        while (previous && previous.nodeType != 1) {
          previous = previous.previousSibling
        }
        return previous
      }

      Node.prototype.insertAfter = function(el, target) {
        var parent = this.parentNode
        if (parent.lastChild == this) {
          parent.appendChild(el)
        } else {
          parent.insertBefore(el, this.nextSibling)
        }
      }

      const slides = {}

      let isTweening = false

      const margin = 120
      let numItems
      let objindex
      const objData = {}
      const objPos = []
      const objName = []
      const objOrder = []

      var horizontalCenter

      /** create main container */
      const ul = document.createElement('ul')
      // var ul = self.shadowRoot.createElement('ul')
      ul.id = 'carousel'
      $('#slides').appendChild(ul)

      slides.init = function(resp) {
        var recommended = resp.data[0].assets
        var promoted = resp.data[1].assets

        var slides = recommended.concat(promoted)
        /** Filter only slides of type "Action" */
        slides = slides.filter(function(item) {
          if (item.genre == 'Action') return true
        })
        /** sort the results by IMDB rating (descending). */
        slides.sort(function(a, b) {
          return Math.ceil(a.imdb) - Math.ceil(b.imdb)
        })

        numItems = slides.length

        objindex = Math.floor(numItems / 2)

        /** Display the results in a horizontal "carousel", showing the box art image, the title, and the IMDB rating for each item */
        $.each(slides, function(l, i) {
          var slide = document.createElement('li'),
            p = document.createElement('p'),
            img = document.createElement('img')

          slide.id = 'item' + i
          slide.classList.add('slide', 'animated', 'fadeIn')

          /* initially hide first and last, CSS handles the rest */
          if (i == 0 || i == 4) slide.style.visibility = 'hidden'

          p.innerHTML = slides[i].title

          img.src = slides[i].img
          img.setAttribute('alt', slides[i].title)
          slide.appendChild(img)
          slide.appendChild(p)
          $('#' + ul.id).appendChild(slide)

          var tw = slide.clientWidth
          var tpos = slide.offsetLeft

          objData[slide.id] = tpos
          objPos[i] = tpos
          objOrder[i] = tpos

          slide.on('click', function() {
            slides.move(slide)
          })
        })

        slides.events()
      }

      slides.queueRight = function() {
        isTweening = true
        for (let mc in objData) {
          $('#' + mc).style.visibility = 'visible'
          $('#' + mc).classList.remove('moveL')
          $('#' + mc).classList.remove('moveR')
          $('#' + mc).classList.add('moveR')
        }

        var first = $('#' + ul.id).querySelector('li:first-child')
        var last = $('#' + ul.id).querySelector('li:last-child')
        var clone = last.cloneNode(true)
        last.parentNode.removeChild(last)
        $('#' + ul.id).insertBefore(clone, first)

        isTweening = false
      }

      slides.queueLeft = function() {
        isTweening = true
        for (let mc in objData) {
          $('#' + mc).style.visibility = 'visible'
          $('#' + mc).classList.remove('moveL')
          $('#' + mc).classList.remove('moveR')
          $('#' + mc).classList.add('moveL')
        }

        var first = $('#' + ul.id).querySelector('li:first-child')
        var last = $('#' + ul.id).querySelector('li:last-child')
        var clone = first.cloneNode(true)
        first.parentNode.removeChild(first)
        last.insertAfter(clone, last)

        isTweening = false
      }

      slides.move = function(obj) {
        if (obj.offsetLeft > horizontalCenter - margin) {
          slides.queueLeft(obj)
        } else {
          slides.queueRight(obj)
        }
      }

      /** @Events */
      slides.events = function() {
        $('.btn__prev').on('click', function() {
          //console.log("objDATA: " + objData[item2]);
          if (!isTweening) {
            slides.queueLeft()
          }
        })

        $('.btn__next').on('click', function() {
          if (!isTweening) {
            slides.queueRight()
          }
        })

        $('.wrapper').on('keydown', function(e) {
          if (e.keyCode == 39) {
            slides.queueRight()
          }
          if (e.keyCode == 37) {
            slides.queueLeft()
          }
          e.preventDefault
        })

        var wheelEvt =
          'onwheel' in document.createElement('div')
            ? 'wheel' // Modern browsers
            : document.onmousewheel !== undefined
            ? 'mousewheel' // Webkit and IE
            : 'DOMMouseScroll' // remaining browsers

        $('.wrapper').on(wheelEvt, (e) => {
          if (!isTweening) {
            if (e.deltaY > 0) {
              slides.queueLeft()
            } else if (e.deltaY <= 0) {
              slides.queueRight()
            }
          }
        })
      }

    }, false);

  }

  disconnectedCallback() {
    super.disconnectedCallback()
    // this._input.removeEventListener('wheelEvt', this.handleWheel)
  }
  

  render() {
    const { response } = this
    return html`
      <div class="carousel-content wrapper">
        <h2>${this.title}</h2>        
        <p class="visually-hidden">Click, mousewheel or use your keyboard cursor keys</p>
        <nav class="carousel-nav">
          <div id="slides">
          ${response
            ? html`${response.map(i => html`<lit-slide .dataset=${i}></lit-slide>`)}`
            : '<p>No slides were added!</p>'}
          </div>
          <button class="carousel-btn__prev">&#9668; LEFT</button>
          <button class="carousel-btn__next">RIGHT &#9658;</button>
        </nav>
      </div>
    `
  }
}


// customElements.define('lit-carousel', LitCarousel);