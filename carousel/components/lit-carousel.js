// import { LitSlide } from './lit-slide.js'
import { LitElement, html, css } from '../web_modules/lit-element.js'
import './lit-slide.js'

export class LitCarousel extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    }
  }

  constructor() {
    super()
    this.title = ''
  }

  static get styles() {
    return css`
    #wrapper {
      min-height: 100%;
      position: relative;
      overflow-x: hidden;
    }
    nav {
      margin: 10px;
      width: 100%;
      height: 50px;
      cursor: pointer;
    }
    nav #carroussel {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
    nav #carroussel .movie {
      margin: 0 0.3em;
      background: #d1533a;
      padding: 10px;
      display: inline-block;
      list-style: none;
      -webkit-border-top-right-radius: 4px;
      -webkit-border-bottom-right-radius: 0;
      -webkit-border-bottom-left-radius: 0;
      -webkit-border-top-left-radius: 0;
      -moz-border-radius-topright: 4px;
      -moz-border-radius-bottomright: 0;
      -moz-border-radius-bottomleft: 0;
      -moz-border-radius-topleft: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      -webkit-background-clip: padding-box;
      -moz-background-clip: padding;
      background-clip: padding-box;
    }
    nav #carroussel .movie + .moveR + li:last-child,
    nav #carroussel .movie + .moveR + li:nth-child(4) {
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: fadeOut;
      -moz-animation-name: fadeOut;
      -o-animation-name: fadeOut;
      animation-name: fadeOut;
    }
    nav #carroussel .movie.moveL:first-child,
    nav #carroussel .movie.moveL:nth-child(2) {
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: fadeOut;
      -moz-animation-name: fadeOut;
      -o-animation-name: fadeOut;
      animation-name: fadeOut;
    }
    nav #carroussel .movie p {
      font-weight: bold;
    }
    nav button {
      clear: both;
      *zoom: 1;
      display: inline-block;
      outline: none;
      padding: 0.7em 1.5em;
      margin-top: 2em;
      border-radius: 0.4em;
      background: #68eecc;
      text-shadow: 0 0.08em 0.08em #000;
      border-width: 0.08em;
      border-style: solid;
      border-color: #4e7166 #4e7166 #39534b;
      border-bottom-width: 0.2em;
      box-shadow: inset 0.08em 0.08em 0.14em rgba(255, 255, 255, 0.5),
        0.08em 0.14em 0.2em rgba(0, 0, 0, 0.3);
    }
    nav button:before,
    nav button:after {
      content: '\0020';
      display: table;
    }
    nav button:after {
      clear: both;
    }
    nav button:hover {
      background: #96f3db;
    }
    .moveR {
      -webkit-transition: all 0.4s ease-in-out;
      -moz-transition: all 0.4s ease-in-out;
      -ms-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      -webkit-transform: translate(210px, 0);
      -moz-transform: translate(210px, 0);
      -ms-transform: translate(210px, 0);
      -o-transform: translate(210px, 0);
      transform: translate(210px, 0);
    }
    .moveL {
      -webkit-transition: all 0.4s ease-in-out;
      -moz-transition: all 0.4s ease-in-out;
      -ms-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      -webkit-transform: translate(-210px, 0);
      -moz-transform: translate(-210px, 0);
      -ms-transform: translate(-210px, 0);
      -o-transform: translate(-210px, 0);
      transform: translate(-210px, 0);
    }
    @media only screen and (min-width: 320px) {
      body {
        font-size: 12px;
        font-size: 1.2rem;
      }
      nav {
        display: inline;
      }
    }
    @media only screen and (min-width: 640px) {
      body {
        font-size: 16px;
        font-size: 1.6rem;
      }
      #wrapper > header {
        height: 200px;
      }
      nav ul .movie {
        display: inline-block;
      }
      #cntent {
        margin-top: 20px;
      }
    }
    
    `
  }

  // Render template without shadow DOM
  // createRenderRoot() {
  //   return this;
  // }

  connectedCallback() {
    super.connectedCallback() // All inherited lifecycle methods need to call super.

    const self = this

    /**
     * @description helper functions for easy DOM manipulation
     * @param {String} selector 
     */
    const $ = function(selector) {
      var selectorType = 'querySelectorAll'

      if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById'
        selector = selector.substr(1, selector.length)
      }
      debugger
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

    const app = {}

    var isTweening = false

    var intervalo = 120
    var numItems
    var centroX = document.body.clientWidth / 2
    var centroY = document.body.clientHeight / 2
    var objindex
    var objData = {}
    var objPos = []
    var objName = []
    var objOrder = []

    var centroH
    /** @description - main container */
    var home = document.createElement('ul')
    home.id = 'Carroussel'
    debugger
    $('#movies').insertBefore(home, parent.firstChild)

    app.init = function(resp) {
      debugger
      var recommended = resp.data[0].assets
      var promoted = resp.data[1].assets

      var movies = recommended.concat(promoted)
      /** Filter only movies of type "Action" */
      movies = movies.filter(function(item) {
        if (item.genre == 'Action') return true
      })
      /** sort the results by IMDB rating (descending). */
      movies.sort(function(a, b) {
        return Math.ceil(a.imdb) - Math.ceil(b.imdb)
      })

      numItems = movies.length

      objindex = Math.floor(numItems / 2)

      /** @{constructor}  - Display the results in a horizontal "carousel", showing the box art image, the title, and the IMDB rating for each item */
      $.each(movies, function(l, i) {
        var movie = document.createElement('li'),
          p = document.createElement('p'),
          img = document.createElement('img')

        movie.id = 'item' + i
        movie.classList.add('movie', 'animated', 'fadeIn')

        /* initially hide first and last, CSS handles the rest */
        if (i == 0 || i == 4) movie.style.visibility = 'hidden'

        p.innerHTML = movies[i].title

        img.src = movies[i].img
        img.setAttribute('alt', movies[i].title)
        movie.appendChild(img)
        movie.appendChild(p)
        $('#' + home.id).appendChild(movie)

        var tw = movie.clientWidth
        var tpos = movie.offsetLeft

        objData[movie.id] = tpos
        objPos[i] = tpos
        objOrder[i] = tpos

        movie.on('click', function() {
          app.move(movie)
        })
      })

      app.events()
    }

    app.queueRight = function() {
      isTweening = true
      for (mc in objData) {
        $('#' + mc).style.visibility = 'visible'
        $('#' + mc).classList.remove('moveL')
        $('#' + mc).classList.remove('moveR')
        $('#' + mc).classList.add('moveR')
      }

      var first = $('#' + home.id).querySelector('li:first-child')
      var last = $('#' + home.id).querySelector('li:last-child')
      var clone = last.cloneNode(true)
      last.parentNode.removeChild(last)
      $('#' + home.id).insertBefore(clone, first)

      isTweening = false
    }

    app.queueLeft = function() {
      isTweening = true
      for (mc in objData) {
        $('#' + mc).style.visibility = 'visible'
        $('#' + mc).classList.remove('moveL')
        $('#' + mc).classList.remove('moveR')
        $('#' + mc).classList.add('moveL')
      }

      var first = $('#' + home.id).querySelector('li:first-child')
      var last = $('#' + home.id).querySelector('li:last-child')
      var clone = first.cloneNode(true)
      first.parentNode.removeChild(first)
      last.insertAfter(clone, last)

      isTweening = false
    }

    app.move = function(obj) {
      if (obj.offsetLeft > centroH - intervalo) {
        app.queueLeft(obj)
      } else {
        app.queueRight(obj)
      }
    }

    /** @Events */
    app.events = function() {
      $('#left').on('click', function() {
        //console.log("objDATA: " + objData[item2]);
        if (!isTweening) {
          app.queueLeft()
        }
      })

      $('#right').on('click', function() {
        if (!isTweening) {
          app.queueRight()
        }
      })

      $('#wrapper').on('keydown', function(e) {
        if (e.keyCode == 39) {
          app.queueRight()
        }
        if (e.keyCode == 37) {
          app.queueLeft()
        }
        e.preventDefault
      })

      var wheelEvt =
        'onwheel' in document.createElement('div')
          ? 'wheel' // Modern browsers
          : document.onmousewheel !== undefined
          ? 'mousewheel' // Webkit and IE
          : 'DOMMouseScroll' // remaining browsers

      $('#wrapper').on(wheelEvt, function(e) {
        if (!isTweening) {
          if (e.deltaY > 0) {
            app.queueLeft()
          } else if (e.deltaY <= 0) {
            app.queueRight()
          }
        }
      })
    }

    /**
     * @description: Get data
     * @return: {Promise}
     */
    const url = 'http://lg-devtest.herokuapp.com/data.json'
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer u12A8f3Zg',
      },
    }

    fetch(url, options, 'GET')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        app.init(data)
      })
      .catch(err => console.error(err))
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    // this._input.removeEventListener('wheelEvt', this.handleWheel)
  }
  
  render() {
    return html`
      <lit-slide></lit-slide>
      <div id="content">
        <h2>${this.title}</h2>
        <p>Click, mousewheel or use your keyboard cursor keys</p>
        <nav id="nav">
          <div id="movies"></div>
          <button id="left">&#9668; LEFT</button>
          <button id="right">RIGHT &#9658;</button>
        </nav>
      </div>
    `
  }
}
