# Component Exercise

This exercise makes use of snowpack for better development experience and less overhead on the artifacts.

#### 🎉 `Snowpack` + `lit-element` + `lit-html`

## 🚀 Getting Started

```
npm install
npm start
```
Your app will be available at `localhost:8080`


To run tests:

```
npm test
```


## Rationale

Web components provide us with encapsulation and separation of concerns out of the box.
I have used no frameworks but chosen to include LitElement (and LitHtml) for improved developer experience and readability.
They also provide a baseline polyfill for browsers with poor support for custom elements.

## A note on directives

If you want to use directives, you'll have to add them to the `webDependencies` property in your `package.json`:

```json
  "snowpack": {
    "webDependencies": [
        "lit-html",
        "lit-element",
        "lit-html/directives/until.js",
        "lit-html/directives/class-map.js"
    ],
  },
```

### 🙏 Please refer to

[lit-html](https://github.com/polymer/lit-html)
[lit-element](https://github.com/polymer/lit-element)
[D3](https://github.com/d3/d3)

---

📝 `License:` [`MIT`](https://opensource.org/licenses/MIT)
