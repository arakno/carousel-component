import { LitElement, html, css } from '../web_modules/lit-element.js'

export class LitCarousel extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    }
  }

  constructor() {
    super()
    this.title = ''
    // attach a shadow allowing for accessibility from outside
    // this.attachShadow({mode: 'open'});
  }

  static get styles() {
    return css`
      ul {
        min-height: 100px;
        padding: 0;
        list-style: none;
        text-align: left;
        border: 4px dashed #aaa;
      }

      li {
        padding: 5px 10px;
      }

      li:nth-child(odd) {
        box-shadow: 0 0 1px -1px rgba(0, 0, 0, 0.5);
        background: #f8fbff;
      }

      button {
        font-size: 24px;
        padding: 10px;
      }
    `
  }

  // createRenderRoot() {
  //   /**
  //    * Render template without shadow DOM. Note that shadow DOM features like
  //    * encapsulated CSS and slots are unavailable.
  //    */
  //   return this;
  // }

  connectedCallback() {
    super.connectedCallback() // All inherited lifecycle methods need to call super.

    console.log('TA LIGADO VEI!')

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

  render() {
    return html`
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
