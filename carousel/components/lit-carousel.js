import { LitElement, html, css } from '../web_modules/lit-element.js'
import * as d3 from 'https://unpkg.com/d3?module'
// var d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));

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
    this.response = [{
      title: 'Revenue',
      value: '200.000',
      data: [70, 30]
    }, {
      title: 'Impressions',
      value: 50.000.000,
      data: [60, 40]
    }, {
      title: 'Visits',
      value: 600.000.000,
      data: [90, 10]
    }]
  }

  static get styles() {
    return css`

    .text-overflow {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .text-wrap {
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
      text-overflow: ellipsis;
      -ms-word-break: break-all;
      word-break: break-all;
      word-break: break-word;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
    }
    .visuallyhidden.focusable:active,
    .visuallyhidden.focusable:focus {
      position: static;
      clip: auto;
      height: auto;
      width: auto;
      margin: 0;
      overflow: visible;
    }
    .animated {
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .animated.hinge {
      -webkit-animation-duration: 2s;
      -moz-animation-duration: 2s;
      -o-animation-duration: 2s;
      animation-duration: 2s;
    }
    @-webkit-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
    @-moz-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
    @-o-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
    .flash {
      -webkit-animation-name: flash;
      -moz-animation-name: flash;
      -o-animation-name: flash;
      animation-name: flash;
    }
    @-webkit-keyframes shake {
      0%,
      100% {
        -webkit-transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translateX(-10px);
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translateX(10px);
      }
    }
    @-moz-keyframes shake {
      0%,
      100% {
        -moz-transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -moz-transform: translateX(-10px);
      }
      20%,
      40%,
      60%,
      80% {
        -moz-transform: translateX(10px);
      }
    }
    @-o-keyframes shake {
      0%,
      100% {
        -o-transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -o-transform: translateX(-10px);
      }
      20%,
      40%,
      60%,
      80% {
        -o-transform: translateX(10px);
      }
    }
    @keyframes shake {
      0%,
      100% {
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translateX(-10px);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translateX(10px);
      }
    }
    .shake {
      -webkit-animation-name: shake;
      -moz-animation-name: shake;
      -o-animation-name: shake;
      animation-name: shake;
    }
    @-webkit-keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        -webkit-transform: translateY(0);
      }
      40% {
        -webkit-transform: translateY(-30px);
      }
      60% {
        -webkit-transform: translateY(-15px);
      }
    }
    @-moz-keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        -moz-transform: translateY(0);
      }
      40% {
        -moz-transform: translateY(-30px);
      }
      60% {
        -moz-transform: translateY(-15px);
      }
    }
    @-o-keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        -o-transform: translateY(0);
      }
      40% {
        -o-transform: translateY(-30px);
      }
      60% {
        -o-transform: translateY(-15px);
      }
    }
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    .bounce {
      -webkit-animation-name: bounce;
      -moz-animation-name: bounce;
      -o-animation-name: bounce;
      animation-name: bounce;
    }
    @-webkit-keyframes tada {
      0% {
        -webkit-transform: scale(1);
      }
      10%,
      20% {
        -webkit-transform: scale(0.9) rotate(-3deg);
      }
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: scale(1.1) rotate(3deg);
      }
      40%,
      60%,
      80% {
        -webkit-transform: scale(1.1) rotate(-3deg);
      }
      100% {
        -webkit-transform: scale(1) rotate(0);
      }
    }
    @-moz-keyframes tada {
      0% {
        -moz-transform: scale(1);
      }
      10%,
      20% {
        -moz-transform: scale(0.9) rotate(-3deg);
      }
      30%,
      50%,
      70%,
      90% {
        -moz-transform: scale(1.1) rotate(3deg);
      }
      40%,
      60%,
      80% {
        -moz-transform: scale(1.1) rotate(-3deg);
      }
      100% {
        -moz-transform: scale(1) rotate(0);
      }
    }
    @-o-keyframes tada {
      0% {
        -o-transform: scale(1);
      }
      10%,
      20% {
        -o-transform: scale(0.9) rotate(-3deg);
      }
      30%,
      50%,
      70%,
      90% {
        -o-transform: scale(1.1) rotate(3deg);
      }
      40%,
      60%,
      80% {
        -o-transform: scale(1.1) rotate(-3deg);
      }
      100% {
        -o-transform: scale(1) rotate(0);
      }
    }
    @keyframes tada {
      0% {
        transform: scale(1);
      }
      10%,
      20% {
        transform: scale(0.9) rotate(-3deg);
      }
      30%,
      50%,
      70%,
      90% {
        transform: scale(1.1) rotate(3deg);
      }
      40%,
      60%,
      80% {
        transform: scale(1.1) rotate(-3deg);
      }
      100% {
        transform: scale(1) rotate(0);
      }
    }
    .tada {
      -webkit-animation-name: tada;
      -moz-animation-name: tada;
      -o-animation-name: tada;
      animation-name: tada;
    }
    @-webkit-keyframes swing {
      20%,
      40%,
      60%,
      80%,
      100% {
        -webkit-origin: top center;
      }
      20% {
        -webkit: rotate(15deg);
      }
      40% {
        -webkit: rotate(-10deg);
      }
      60% {
        -webkit: rotate(5deg);
      }
      80% {
        -webkit: rotate(-5deg);
      }
      100% {
        -webkit-transform: rotate(0deg);
      }
    }
    @-moz-keyframes swing {
      20% {
        -moz-transform: rotate(15deg);
      }
      40% {
        -moz-transform: rotate(-10deg);
      }
      60% {
        -moz-transform: rotate(5deg);
      }
      80% {
        -moz-transform: rotate(-5deg);
      }
      100% {
        -moz-transform: rotate(0deg);
      }
    }
    @-o-keyframes swing {
      20% {
        -o-transform: rotate(15deg);
      }
      40% {
        -o-transform: rotate(-10deg);
      }
      60% {
        -o-transform: rotate(5deg);
      }
      80% {
        -o-transform: rotate(-5deg);
      }
      100% {
        -o-transform: rotate(0deg);
      }
    }
    @keyframes swing {
      20% {
        transform: rotate(15deg);
      }
      40% {
        transform: rotate(-10deg);
      }
      60% {
        transform: rotate(5deg);
      }
      80% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @-webkit-keyframes wobble {
      0% {
        -webkit: translateX(0);
      }
      15% {
        -webkit: translateX(-25%) rotate(-5deg);
      }
      30% {
        -webkit: translateX(20%) rotate(3deg);
      }
      45% {
        -webkit: translateX(-15%) rotate(-3deg);
      }
      60% {
        -webkit: translateX(10%) rotate(2deg);
      }
      75% {
        -webkit: translateX(-5%) rotate(-1deg);
      }
      100% {
        -webkit: translateX(0);
      }
    }
    @-moz-keyframes wobble {
      0% {
        -moz-transform: translateX(0);
      }
      15% {
        -moz-transform: translateX(-25%) rotate(-5deg);
      }
      30% {
        -moz-transform: translateX(20%) rotate(3deg);
      }
      45% {
        -moz-transform: translateX(-15%) rotate(-3deg);
      }
      60% {
        -moz-transform: translateX(10%) rotate(2deg);
      }
      75% {
        -moz-transform: translateX(-5%) rotate(-1deg);
      }
      100% {
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes wobble {
      0% {
        -o-transform: translateX(0);
      }
      15% {
        -o-transform: translateX(-25%) rotate(-5deg);
      }
      30% {
        -o-transform: translateX(20%) rotate(3deg);
      }
      45% {
        -o-transform: translateX(-15%) rotate(-3deg);
      }
      60% {
        -o-transform: translateX(10%) rotate(2deg);
      }
      75% {
        -o-transform: translateX(-5%) rotate(-1deg);
      }
      100% {
        -o-transform: translateX(0);
      }
    }
    @keyframes wobble {
      0% {
        transform: translateX(0);
      }
      15% {
        transform: translateX(-25%) rotate(-5deg);
      }
      30% {
        transform: translateX(20%) rotate(3deg);
      }
      45% {
        transform: translateX(-15%) rotate(-3deg);
      }
      60% {
        transform: translateX(10%) rotate(2deg);
      }
      75% {
        transform: translateX(-5%) rotate(-1deg);
      }
      100% {
        transform: translateX(0);
      }
    }
    .wobble {
      -webkit-animation-name: wobble;
      -moz-animation-name: wobble;
      -o-animation-name: wobble;
      animation-name: wobble;
    }
    .pulse {
      -webkit-animation-name: pulse;
      -moz-animation-name: pulse;
      -o-animation-name: pulse;
      animation-name: pulse;
    }
    @-webkit-keyframes pulse {
      0% {
        -webkit: scale(1);
      }
      50% {
        -webkit: scale(1.1);
      }
      100% {
        -webkit: scale(1);
      }
    }
    @-moz-keyframes pulse {
      0% {
        -moz-transform: scale(1);
      }
      50% {
        -moz-transform: scale(1.1);
      }
      100% {
        -moz-transform: scale(1);
      }
    }
    @-o-keyframes pulse {
      0% {
        -o-transform: scale(1);
      }
      50% {
        -o-transform: scale(1.1);
      }
      100% {
        -o-transform: scale(1);
      }
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    @-webkit-keyframes flip {
      0% {
        -webkit-transform: perspective(400px) rotateY(0);
        -webkit-animation-timing-function: ease-out;
      }
      40% {
        -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);
        -webkit-animation-timing-function: ease-out;
      }
      50% {
        -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg)
          scale(1);
        -webkit-animation-timing-function: ease-in;
      }
      80% {
        -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);
        -webkit-animation-timing-function: ease-in;
      }
      100% {
        -webkit-transform: perspective(400px) scale(1);
        -webkit-animation-timing-function: ease-in;
      }
    }
    @-moz-keyframes flip {
      0% {
        -moz-transform: perspective(400px) rotateY(0);
        -moz-animation-timing-function: ease-out;
      }
      40% {
        -moz-transform: perspective(400px) translateZ(150px) rotateY(170deg);
        -moz-animation-timing-function: ease-out;
      }
      50% {
        -moz-transform: perspective(400px) translateZ(150px) rotateY(190deg)
          scale(1);
        -moz-animation-timing-function: ease-in;
      }
      80% {
        -moz-transform: perspective(400px) rotateY(360deg) scale(0.95);
        -moz-animation-timing-function: ease-in;
      }
      100% {
        -moz-transform: perspective(400px) scale(1);
        -moz-animation-timing-function: ease-in;
      }
    }
    @-o-keyframes flip {
      0% {
        -o-transform: perspective(400px) rotateY(0);
        -o-animation-timing-function: ease-out;
      }
      40% {
        -o-transform: perspective(400px) translateZ(150px) rotateY(170deg);
        -o-animation-timing-function: ease-out;
      }
      50% {
        -o-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
        -o-animation-timing-function: ease-in;
      }
      80% {
        -o-transform: perspective(400px) rotateY(360deg) scale(0.95);
        -o-animation-timing-function: ease-in;
      }
      100% {
        -o-transform: perspective(400px) scale(1);
        -o-animation-timing-function: ease-in;
      }
    }
    @keyframes flip {
      0% {
        transform: perspective(400px) rotateY(0);
        animation-timing-function: ease-out;
      }
      40% {
        transform: perspective(400px) translateZ(150px) rotateY(170deg);
        animation-timing-function: ease-out;
      }
      50% {
        transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
        animation-timing-function: ease-in;
      }
      80% {
        transform: perspective(400px) rotateY(360deg) scale(0.95);
        animation-timing-function: ease-in;
      }
      100% {
        transform: perspective(400px) scale(1);
        animation-timing-function: ease-in;
      }
    }
    .flip {
      -webkit-backface-visibility: visible !important;
      -moz-backface-visibility: visible !important;
      -o-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flip;
      -moz-animation-name: flip;
      -o-animation-name: flip;
      animation-name: flip;
    }
    @-webkit-keyframes flipInX {
      0% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
      40% {
        -webkit-transform: perspective(400px) rotateX(-10deg);
      }
      70% {
        -webkit-transform: perspective(400px) rotateX(10deg);
      }
      100% {
        -webkit-transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
    }
    @-moz-keyframes flipInX {
      0% {
        -moz-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
      40% {
        -moz-transform: perspective(400px) rotateX(-10deg);
      }
      70% {
        -moz-transform: perspective(400px) rotateX(10deg);
      }
      100% {
        -moz-transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
    }
    @-o-keyframes flipInX {
      0% {
        -o-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
      40% {
        -o-transform: perspective(400px) rotateX(-10deg);
      }
      70% {
        -o-transform: perspective(400px) rotateX(10deg);
      }
      100% {
        -o-transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
    }
    @keyframes flipInX {
      0% {
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
      40% {
        transform: perspective(400px) rotateX(-10deg);
      }
      70% {
        transform: perspective(400px) rotateX(10deg);
      }
      100% {
        transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
    }
    .flipInX {
      -webkit-backface-visibility: visible !important;
      -moz-backface-visibility: visible !important;
      -o-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipInX;
      -moz-animation-name: flipInX;
      -o-animation-name: flipInX;
      animation-name: flipInX;
    }
    @-webkit-keyframes flipOutX {
      0% {
        -webkit-transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
      100% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
    }
    @-moz-keyframes flipOutX {
      0% {
        -moz-transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
      100% {
        -moz-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
    }
    @-o-keyframes flipOutX {
      0% {
        -o-transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
      100% {
        -o-transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
    }
    @keyframes flipOutX {
      0% {
        transform: perspective(400px) rotateX(0deg);
        opacity: 1;
      }
      100% {
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
      }
    }
    .flipOutX {
      -webkit-backface-visibility: visible !important;
      -moz-backface-visibility: visible !important;
      -o-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipOutX;
      -moz-animation-name: flipOutX;
      -o-animation-name: flipOutX;
      animation-name: flipOutX;
    }
    @-webkit-keyframes flipInY {
      0% {
        -webkit-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
      40% {
        -webkit-transform: perspective(400px) rotateY(-10deg);
      }
      70% {
        -webkit-transform: perspective(400px) rotateY(10deg);
      }
      100% {
        -webkit-transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
    }
    @-moz-keyframes flipInY {
      0% {
        -moz-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
      40% {
        -moz-transform: perspective(400px) rotateY(-10deg);
      }
      70% {
        -moz-transform: perspective(400px) rotateY(10deg);
      }
      100% {
        -moz-transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
    }
    @-o-keyframes flipInY {
      0% {
        -o-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
      40% {
        -o-transform: perspective(400px) rotateY(-10deg);
      }
      70% {
        -o-transform: perspective(400px) rotateY(10deg);
      }
      100% {
        -o-transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
    }
    @keyframes flipInY {
      0% {
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
      40% {
        transform: perspective(400px) rotateY(-10deg);
      }
      70% {
        transform: perspective(400px) rotateY(10deg);
      }
      100% {
        transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
    }
    .flipInY {
      -webkit-backface-visibility: visible !important;
      -moz-backface-visibility: visible !important;
      -o-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipInY;
      -moz-animation-name: flipInY;
      -o-animation-name: flipInY;
      animation-name: flipInY;
    }
    @-webkit-keyframes flipOutY {
      0% {
        -webkit-transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
      100% {
        -webkit-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
    }
    @-moz-keyframes flipOutY {
      0% {
        -moz-transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
      100% {
        -moz-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
    }
    @-o-keyframes flipOutY {
      0% {
        -o-transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
      100% {
        -o-transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
    }
    @keyframes flipOutY {
      0% {
        transform: perspective(400px) rotateY(0deg);
        opacity: 1;
      }
      100% {
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
      }
    }
    .flipOutY {
      -webkit-backface-visibility: visible !important;
      -moz-backface-visibility: visible !important;
      -o-backface-visibility: visible !important;
      backface-visibility: visible !important;
      -webkit-animation-name: flipOutY;
      -moz-animation-name: flipOutY;
      -o-animation-name: flipOutY;
      animation-name: flipOutY;
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .fadeIn {
      -webkit-animation-name: fadeIn;
      -moz-animation-name: fadeIn;
      -o-animation-name: fadeIn;
      animation-name: fadeIn;
    }
    @-webkit-keyframes fadeInUp {
      0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
    }
    @-moz-keyframes fadeInUp {
      0% {
        opacity: 0;
        -moz-transform: translateY(20px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
    }
    @-o-keyframes fadeInUp {
      0% {
        opacity: 0;
        -o-transform: translateY(20px);
      }
      100% {
        opacity: 1;
        -o-transform: translateY(0);
      }
    }
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fadeInUp {
      -webkit-animation-name: fadeInUp;
      -moz-animation-name: fadeInUp;
      -o-animation-name: fadeInUp;
      animation-name: fadeInUp;
    }
    @-webkit-keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
    }
    @-moz-keyframes fadeInDown {
      0% {
        opacity: 0;
        -moz-transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
    }
    @-o-keyframes fadeInDown {
      0% {
        opacity: 0;
        -o-transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        -o-transform: translateY(0);
      }
    }
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fadeInDown {
      -webkit-animation-name: fadeInDown;
      -moz-animation-name: fadeInDown;
      -o-animation-name: fadeInDown;
      animation-name: fadeInDown;
    }
    @-webkit-keyframes fadeInLeft {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes fadeInLeft {
      0% {
        opacity: 0;
        -moz-transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes fadeInLeft {
      0% {
        opacity: 0;
        -o-transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        -o-transform: translateX(0);
      }
    }
    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .fadeInLeft {
      -webkit-animation-name: fadeInLeft;
      -moz-animation-name: fadeInLeft;
      -o-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
    }
    @-webkit-keyframes fadeInRight {
      0% {
        opacity: 0;
        -webkit-transform: translateX(20px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes fadeInRight {
      0% {
        opacity: 0;
        -moz-transform: translateX(20px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes fadeInRight {
      0% {
        opacity: 0;
        -o-transform: translateX(20px);
      }
      100% {
        opacity: 1;
        -o-transform: translateX(0);
      }
    }
    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .fadeInRight {
      -webkit-animation-name: fadeInRight;
      -moz-animation-name: fadeInRight;
      -o-animation-name: fadeInRight;
      animation-name: fadeInRight;
    }
    @-webkit-keyframes fadeInUpBig {
      0% {
        opacity: 0;
        -webkit-transform: translateY(2000px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
    }
    @-moz-keyframes fadeInUpBig {
      0% {
        opacity: 0;
        -moz-transform: translateY(2000px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
    }
    @-o-keyframes fadeInUpBig {
      0% {
        opacity: 0;
        -o-transform: translateY(2000px);
      }
      100% {
        opacity: 1;
        -o-transform: translateY(0);
      }
    }
    @keyframes fadeInUpBig {
      0% {
        opacity: 0;
        transform: translateY(2000px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fadeInUpBig {
      -webkit-animation-name: fadeInUpBig;
      -moz-animation-name: fadeInUpBig;
      -o-animation-name: fadeInUpBig;
      animation-name: fadeInUpBig;
    }
    @-webkit-keyframes fadeInDownBig {
      0% {
        opacity: 0;
        -webkit-transform: translateY(-2000px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
    }
    @-moz-keyframes fadeInDownBig {
      0% {
        opacity: 0;
        -moz-transform: translateY(-2000px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
    }
    @-o-keyframes fadeInDownBig {
      0% {
        opacity: 0;
        -o-transform: translateY(-2000px);
      }
      100% {
        opacity: 1;
        -o-transform: translateY(0);
      }
    }
    @keyframes fadeInDownBig {
      0% {
        opacity: 0;
        transform: translateY(-2000px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fadeInDownBig {
      -webkit-animation-name: fadeInDownBig;
      -moz-animation-name: fadeInDownBig;
      -o-animation-name: fadeInDownBig;
      animation-name: fadeInDownBig;
    }
    @-webkit-keyframes fadeInLeftBig {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes fadeInLeftBig {
      0% {
        opacity: 0;
        -moz-transform: translateX(-2000px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes fadeInLeftBig {
      0% {
        opacity: 0;
        -o-transform: translateX(-2000px);
      }
      100% {
        opacity: 1;
        -o-transform: translateX(0);
      }
    }
    @keyframes fadeInLeftBig {
      0% {
        opacity: 0;
        transform: translateX(-2000px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .fadeInLeftBig {
      -webkit-animation-name: fadeInLeftBig;
      -moz-animation-name: fadeInLeftBig;
      -o-animation-name: fadeInLeftBig;
      animation-name: fadeInLeftBig;
    }
    @-webkit-keyframes fadeInRightBig {
      0% {
        opacity: 0;
        -webkit-transform: translateX(2000px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes fadeInRightBig {
      0% {
        opacity: 0;
        -moz-transform: translateX(2000px);
      }
      100% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes fadeInRightBig {
      0% {
        opacity: 0;
        -o-transform: translateX(2000px);
      }
      100% {
        opacity: 1;
        -o-transform: translateX(0);
      }
    }
    @keyframes fadeInRightBig {
      0% {
        opacity: 0;
        transform: translateX(2000px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .fadeInRightBig {
      -webkit-animation-name: fadeInRightBig;
      -moz-animation-name: fadeInRightBig;
      -o-animation-name: fadeInRightBig;
      animation-name: fadeInRightBig;
    }
    @-webkit-keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @-moz-keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @-o-keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .fadeOut {
      -webkit-animation-name: fadeOut;
      -moz-animation-name: fadeOut;
      -o-animation-name: fadeOut;
      animation-name: fadeOut;
    }
    @-webkit-keyframes fadeOutUp {
      0% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
      }
    }
    @-moz-keyframes fadeOutUp {
      0% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateY(-20px);
      }
    }
    @-o-keyframes fadeOutUp {
      0% {
        opacity: 1;
        -o-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateY(-20px);
      }
    }
    @keyframes fadeOutUp {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    .fadeOutUp {
      -webkit-animation-name: fadeOutUp;
      -moz-animation-name: fadeOutUp;
      -o-animation-name: fadeOutUp;
      animation-name: fadeOutUp;
    }
    @-webkit-keyframes fadeOutDown {
      0% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(20px);
      }
    }
    @-moz-keyframes fadeOutDown {
      0% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateY(20px);
      }
    }
    @-o-keyframes fadeOutDown {
      0% {
        opacity: 1;
        -o-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateY(20px);
      }
    }
    @keyframes fadeOutDown {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }
    .fadeOutDown {
      -webkit-animation-name: fadeOutDown;
      -moz-animation-name: fadeOutDown;
      -o-animation-name: fadeOutDown;
      animation-name: fadeOutDown;
    }
    @-webkit-keyframes fadeOutLeft {
      0% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(-20px);
      }
    }
    @-moz-keyframes fadeOutLeft {
      0% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(-20px);
      }
    }
    @-o-keyframes fadeOutLeft {
      0% {
        opacity: 1;
        -o-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(-20px);
      }
    }
    @keyframes fadeOutLeft {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-20px);
      }
    }
    .fadeOutLeft {
      -webkit-animation-name: fadeOutLeft;
      -moz-animation-name: fadeOutLeft;
      -o-animation-name: fadeOutLeft;
      animation-name: fadeOutLeft;
    }
    @-webkit-keyframes fadeOutRight {
      0% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(20px);
      }
    }
    @-moz-keyframes fadeOutRight {
      0% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(20px);
      }
    }
    @-o-keyframes fadeOutRight {
      0% {
        opacity: 1;
        -o-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(20px);
      }
    }
    @keyframes fadeOutRight {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateX(20px);
      }
    }
    .fadeOutRight {
      -webkit-animation-name: fadeOutRight;
      -moz-animation-name: fadeOutRight;
      -o-animation-name: fadeOutRight;
      animation-name: fadeOutRight;
    }
    @-webkit-keyframes fadeOutUpBig {
      0% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(-2000px);
      }
    }
    @-moz-keyframes fadeOutUpBig {
      0% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateY(-2000px);
      }
    }
    @-o-keyframes fadeOutUpBig {
      0% {
        opacity: 1;
        -o-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateY(-2000px);
      }
    }
    @keyframes fadeOutUpBig {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-2000px);
      }
    }
    .fadeOutUpBig {
      -webkit-animation-name: fadeOutUpBig;
      -moz-animation-name: fadeOutUpBig;
      -o-animation-name: fadeOutUpBig;
      animation-name: fadeOutUpBig;
    }
    @-webkit-keyframes fadeOutDownBig {
      0% {
        opacity: 1;
        -webkit-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(2000px);
      }
    }
    @-moz-keyframes fadeOutDownBig {
      0% {
        opacity: 1;
        -moz-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateY(2000px);
      }
    }
    @-o-keyframes fadeOutDownBig {
      0% {
        opacity: 1;
        -o-transform: translateY(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateY(2000px);
      }
    }
    @keyframes fadeOutDownBig {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(2000px);
      }
    }
    .fadeOutDownBig {
      -webkit-animation-name: fadeOutDownBig;
      -moz-animation-name: fadeOutDownBig;
      -o-animation-name: fadeOutDownBig;
      animation-name: fadeOutDownBig;
    }
    @-webkit-keyframes fadeOutLeftBig {
      0% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
      }
    }
    @-moz-keyframes fadeOutLeftBig {
      0% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(-2000px);
      }
    }
    @-o-keyframes fadeOutLeftBig {
      0% {
        opacity: 1;
        -o-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(-2000px);
      }
    }
    @keyframes fadeOutLeftBig {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-2000px);
      }
    }
    .fadeOutLeftBig {
      -webkit-animation-name: fadeOutLeftBig;
      -moz-animation-name: fadeOutLeftBig;
      -o-animation-name: fadeOutLeftBig;
      animation-name: fadeOutLeftBig;
    }
    @-webkit-keyframes fadeOutRightBig {
      0% {
        opacity: 1;
        -webkit-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(2000px);
      }
    }
    @-moz-keyframes fadeOutRightBig {
      0% {
        opacity: 1;
        -moz-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(2000px);
      }
    }
    @-o-keyframes fadeOutRightBig {
      0% {
        opacity: 1;
        -o-transform: translateX(0);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(2000px);
      }
    }
    @keyframes fadeOutRightBig {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateX(2000px);
      }
    }
    .fadeOutRightBig {
      -webkit-animation-name: fadeOutRightBig;
      -moz-animation-name: fadeOutRightBig;
      -o-animation-name: fadeOutRightBig;
      animation-name: fadeOutRightBig;
    }
    @-webkit-keyframes bounceIn {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.3);
      }
      50% {
        opacity: 1;
        -webkit-transform: scale(1.05);
      }
      70% {
        -webkit-transform: scale(0.9);
      }
      100% {
        -webkit-transform: scale(1);
      }
    }
    @-moz-keyframes bounceIn {
      0% {
        opacity: 0;
        -moz-transform: scale(0.3);
      }
      50% {
        opacity: 1;
        -moz-transform: scale(1.05);
      }
      70% {
        -moz-transform: scale(0.9);
      }
      100% {
        -moz-transform: scale(1);
      }
    }
    @-o-keyframes bounceIn {
      0% {
        opacity: 0;
        -o-transform: scale(0.3);
      }
      50% {
        opacity: 1;
        -o-transform: scale(1.05);
      }
      70% {
        -o-transform: scale(0.9);
      }
      100% {
        -o-transform: scale(1);
      }
    }
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
    .bounceIn {
      -webkit-animation-name: bounceIn;
      -moz-animation-name: bounceIn;
      -o-animation-name: bounceIn;
      animation-name: bounceIn;
    }
    @-webkit-keyframes bounceInUp {
      0% {
        opacity: 0;
        -webkit-transform: translateY(2000px);
      }
      60% {
        opacity: 1;
        -webkit-transform: translateY(-30px);
      }
      80% {
        -webkit-transform: translateY(10px);
      }
      100% {
        -webkit-transform: translateY(0);
      }
    }
    @-moz-keyframes bounceInUp {
      0% {
        opacity: 0;
        -moz-transform: translateY(2000px);
      }
      60% {
        opacity: 1;
        -moz-transform: translateY(-30px);
      }
      80% {
        -moz-transform: translateY(10px);
      }
      100% {
        -moz-transform: translateY(0);
      }
    }
    @-o-keyframes bounceInUp {
      0% {
        opacity: 0;
        -o-transform: translateY(2000px);
      }
      60% {
        opacity: 1;
        -o-transform: translateY(-30px);
      }
      80% {
        -o-transform: translateY(10px);
      }
      100% {
        -o-transform: translateY(0);
      }
    }
    @keyframes bounceInUp {
      0% {
        opacity: 0;
        transform: translateY(2000px);
      }
      60% {
        opacity: 1;
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
    .bounceInUp {
      -webkit-animation-name: bounceInUp;
      -moz-animation-name: bounceInUp;
      -o-animation-name: bounceInUp;
      animation-name: bounceInUp;
    }
    @-webkit-keyframes bounceInDown {
      0% {
        opacity: 0;
        -webkit-transform: translateY(-2000px);
      }
      60% {
        opacity: 1;
        -webkit-transform: translateY(30px);
      }
      80% {
        -webkit-transform: translateY(-10px);
      }
      100% {
        -webkit-transform: translateY(0);
      }
    }
    @-moz-keyframes bounceInDown {
      0% {
        opacity: 0;
        -moz-transform: translateY(-2000px);
      }
      60% {
        opacity: 1;
        -moz-transform: translateY(30px);
      }
      80% {
        -moz-transform: translateY(-10px);
      }
      100% {
        -moz-transform: translateY(0);
      }
    }
    @-o-keyframes bounceInDown {
      0% {
        opacity: 0;
        -o-transform: translateY(-2000px);
      }
      60% {
        opacity: 1;
        -o-transform: translateY(30px);
      }
      80% {
        -o-transform: translateY(-10px);
      }
      100% {
        -o-transform: translateY(0);
      }
    }
    @keyframes bounceInDown {
      0% {
        opacity: 0;
        transform: translateY(-2000px);
      }
      60% {
        opacity: 1;
        transform: translateY(30px);
      }
      80% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
    .bounceInDown {
      -webkit-animation-name: bounceInDown;
      -moz-animation-name: bounceInDown;
      -o-animation-name: bounceInDown;
      animation-name: bounceInDown;
    }
    @-webkit-keyframes bounceInLeft {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
      }
      60% {
        opacity: 1;
        -webkit-transform: translateX(30px);
      }
      80% {
        -webkit-transform: translateX(-10px);
      }
      100% {
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes bounceInLeft {
      0% {
        opacity: 0;
        -moz-transform: translateX(-2000px);
      }
      60% {
        opacity: 1;
        -moz-transform: translateX(30px);
      }
      80% {
        -moz-transform: translateX(-10px);
      }
      100% {
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes bounceInLeft {
      0% {
        opacity: 0;
        -o-transform: translateX(-2000px);
      }
      60% {
        opacity: 1;
        -o-transform: translateX(30px);
      }
      80% {
        -o-transform: translateX(-10px);
      }
      100% {
        -o-transform: translateX(0);
      }
    }
    @keyframes bounceInLeft {
      0% {
        opacity: 0;
        transform: translateX(-2000px);
      }
      60% {
        opacity: 1;
        transform: translateX(30px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .bounceInLeft {
      -webkit-animation-name: bounceInLeft;
      -moz-animation-name: bounceInLeft;
      -o-animation-name: bounceInLeft;
      animation-name: bounceInLeft;
    }
    @-webkit-keyframes bounceInRight {
      0% {
        opacity: 0;
        -webkit-transform: translateX(2000px);
      }
      60% {
        opacity: 1;
        -webkit-transform: translateX(-30px);
      }
      80% {
        -webkit-transform: translateX(10px);
      }
      100% {
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes bounceInRight {
      0% {
        opacity: 0;
        -moz-transform: translateX(2000px);
      }
      60% {
        opacity: 1;
        -moz-transform: translateX(-30px);
      }
      80% {
        -moz-transform: translateX(10px);
      }
      100% {
        -moz-transform: translateX(0);
      }
    }
    @-o-keyframes bounceInRight {
      0% {
        opacity: 0;
        -o-transform: translateX(2000px);
      }
      60% {
        opacity: 1;
        -o-transform: translateX(-30px);
      }
      80% {
        -o-transform: translateX(10px);
      }
      100% {
        -o-transform: translateX(0);
      }
    }
    @keyframes bounceInRight {
      0% {
        opacity: 0;
        transform: translateX(2000px);
      }
      60% {
        opacity: 1;
        transform: translateX(-30px);
      }
      80% {
        transform: translateX(10px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .bounceInRight {
      -webkit-animation-name: bounceInRight;
      -moz-animation-name: bounceInRight;
      -o-animation-name: bounceInRight;
      animation-name: bounceInRight;
    }
    @-webkit-keyframes bounceOut {
      0% {
        -webkit-transform: scale(1);
      }
      25% {
        -webkit-transform: scale(0.95);
      }
      50% {
        opacity: 1;
        -webkit-transform: scale(1.1);
      }
      100% {
        opacity: 0;
        -webkit-transform: scale(0.3);
      }
    }
    @-moz-keyframes bounceOut {
      0% {
        -moz-transform: scale(1);
      }
      25% {
        -moz-transform: scale(0.95);
      }
      50% {
        opacity: 1;
        -moz-transform: scale(1.1);
      }
      100% {
        opacity: 0;
        -moz-transform: scale(0.3);
      }
    }
    @-o-keyframes bounceOut {
      0% {
        -o-transform: scale(1);
      }
      25% {
        -o-transform: scale(0.95);
      }
      50% {
        opacity: 1;
        -o-transform: scale(1.1);
      }
      100% {
        opacity: 0;
        -o-transform: scale(0.3);
      }
    }
    @keyframes bounceOut {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(0.95);
      }
      50% {
        opacity: 1;
        transform: scale(1.1);
      }
      100% {
        opacity: 0;
        transform: scale(0.3);
      }
    }
    .bounceOut {
      -webkit-animation-name: bounceOut;
      -moz-animation-name: bounceOut;
      -o-animation-name: bounceOut;
      animation-name: bounceOut;
    }
    @-webkit-keyframes bounceOutUp {
      0% {
        -webkit-transform: translateY(0);
      }
      20% {
        opacity: 1;
        -webkit-transform: translateY(20px);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(-2000px);
      }
    }
    @-moz-keyframes bounceOutUp {
      0% {
        -moz-transform: translateY(0);
      }
      20% {
        opacity: 1;
        -moz-transform: translateY(20px);
      }
      100% {
        opacity: 0;
        -moz-transform: translateY(-2000px);
      }
    }
    @-o-keyframes bounceOutUp {
      0% {
        -o-transform: translateY(0);
      }
      20% {
        opacity: 1;
        -o-transform: translateY(20px);
      }
      100% {
        opacity: 0;
        -o-transform: translateY(-2000px);
      }
    }
    @keyframes bounceOutUp {
      0% {
        transform: translateY(0);
      }
      20% {
        opacity: 1;
        transform: translateY(20px);
      }
      100% {
        opacity: 0;
        transform: translateY(-2000px);
      }
    }
    .bounceOutUp {
      -webkit-animation-name: bounceOutUp;
      -moz-animation-name: bounceOutUp;
      -o-animation-name: bounceOutUp;
      animation-name: bounceOutUp;
    }
    @-webkit-keyframes bounceOutDown {
      0% {
        -webkit-transform: translateY(0);
      }
      20% {
        opacity: 1;
        -webkit-transform: translateY(-20px);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateY(2000px);
      }
    }
    @-moz-keyframes bounceOutDown {
      0% {
        -moz-transform: translateY(0);
      }
      20% {
        opacity: 1;
        -moz-transform: translateY(-20px);
      }
      100% {
        opacity: 0;
        -moz-transform: translateY(2000px);
      }
    }
    @-o-keyframes bounceOutDown {
      0% {
        -o-transform: translateY(0);
      }
      20% {
        opacity: 1;
        -o-transform: translateY(-20px);
      }
      100% {
        opacity: 0;
        -o-transform: translateY(2000px);
      }
    }
    @keyframes bounceOutDown {
      0% {
        transform: translateY(0);
      }
      20% {
        opacity: 1;
        transform: translateY(-20px);
      }
      100% {
        opacity: 0;
        transform: translateY(2000px);
      }
    }
    .bounceOutDown {
      -webkit-animation-name: bounceOutDown;
      -moz-animation-name: bounceOutDown;
      -o-animation-name: bounceOutDown;
      animation-name: bounceOutDown;
    }
    @-webkit-keyframes bounceOutLeft {
      0% {
        -webkit-transform: translateX(0);
      }
      20% {
        opacity: 1;
        -webkit-transform: translateX(20px);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(-2000px);
      }
    }
    @-moz-keyframes bounceOutLeft {
      0% {
        -moz-transform: translateX(0);
      }
      20% {
        opacity: 1;
        -moz-transform: translateX(20px);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(-2000px);
      }
    }
    @-o-keyframes bounceOutLeft {
      0% {
        -o-transform: translateX(0);
      }
      20% {
        opacity: 1;
        -o-transform: translateX(20px);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(-2000px);
      }
    }
    @keyframes bounceOutLeft {
      0% {
        transform: translateX(0);
      }
      20% {
        opacity: 1;
        transform: translateX(20px);
      }
      100% {
        opacity: 0;
        transform: translateX(-2000px);
      }
    }
    .bounceOutLeft {
      -webkit-animation-name: bounceOutLeft;
      -moz-animation-name: bounceOutLeft;
      -o-animation-name: bounceOutLeft;
      animation-name: bounceOutLeft;
    }
    @-webkit-keyframes bounceOutRight {
      0% {
        -webkit-transform: translateX(0);
      }
      20% {
        opacity: 1;
        -webkit-transform: translateX(-20px);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(2000px);
      }
    }
    @-moz-keyframes bounceOutRight {
      0% {
        -moz-transform: translateX(0);
      }
      20% {
        opacity: 1;
        -moz-transform: translateX(-20px);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(2000px);
      }
    }
    @-o-keyframes bounceOutRight {
      0% {
        -o-transform: translateX(0);
      }
      20% {
        opacity: 1;
        -o-transform: translateX(-20px);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(2000px);
      }
    }
    @keyframes bounceOutRight {
      0% {
        transform: translateX(0);
      }
      20% {
        opacity: 1;
        transform: translateX(-20px);
      }
      100% {
        opacity: 0;
        transform: translateX(2000px);
      }
    }
    .bounceOutRight {
      -webkit-animation-name: bounceOutRight;
      -moz-animation-name: bounceOutRight;
      -o-animation-name: bounceOutRight;
      animation-name: bounceOutRight;
    }
    @-webkit-keyframes rotateIn {
      0% {
        -webkit-transform-origin: center center;
        -webkit-transform: rotate(-200deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: center center;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
    }
    @-moz-keyframes rotateIn {
      0% {
        -moz-transform-origin: center center;
        -moz-transform: rotate(-200deg);
        opacity: 0;
      }
      100% {
        -moz-transform-origin: center center;
        -moz-transform: rotate(0);
        opacity: 1;
      }
    }
    @-o-keyframes rotateIn {
      0% {
        -o-transform-origin: center center;
        -o-transform: rotate(-200deg);
        opacity: 0;
      }
      100% {
        -o-transform-origin: center center;
        -o-transform: rotate(0);
        opacity: 1;
      }
    }
    @keyframes rotateIn {
      0% {
        transform-origin: center center;
        transform: rotate(-200deg);
        opacity: 0;
      }
      100% {
        transform-origin: center center;
        transform: rotate(0);
        opacity: 1;
      }
    }
    .rotateIn {
      -webkit-animation-name: rotateIn;
      -moz-animation-name: rotateIn;
      -o-animation-name: rotateIn;
      animation-name: rotateIn;
    }
    @-webkit-keyframes rotateInUpLeft {
      0% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
    }
    @-moz-keyframes rotateInUpLeft {
      0% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
    }
    @-o-keyframes rotateInUpLeft {
      0% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
    }
    @keyframes rotateInUpLeft {
      0% {
        transform-origin: left bottom;
        transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        transform-origin: left bottom;
        transform: rotate(0);
        opacity: 1;
      }
    }
    .rotateInUpLeft {
      -webkit-animation-name: rotateInUpLeft;
      -moz-animation-name: rotateInUpLeft;
      -o-animation-name: rotateInUpLeft;
      animation-name: rotateInUpLeft;
    }
    @-webkit-keyframes rotateInDownLeft {
      0% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
    }
    @-moz-keyframes rotateInDownLeft {
      0% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
    }
    @-o-keyframes rotateInDownLeft {
      0% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
    }
    @keyframes rotateInDownLeft {
      0% {
        transform-origin: left bottom;
        transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        transform-origin: left bottom;
        transform: rotate(0);
        opacity: 1;
      }
    }
    .rotateInDownLeft {
      -webkit-animation-name: rotateInDownLeft;
      -moz-animation-name: rotateInDownLeft;
      -o-animation-name: rotateInDownLeft;
      animation-name: rotateInDownLeft;
    }
    @-webkit-keyframes rotateInUpRight {
      0% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
    }
    @-moz-keyframes rotateInUpRight {
      0% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
    }
    @-o-keyframes rotateInUpRight {
      0% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
    }
    @keyframes rotateInUpRight {
      0% {
        transform-origin: right bottom;
        transform: rotate(-90deg);
        opacity: 0;
      }
      100% {
        transform-origin: right bottom;
        transform: rotate(0);
        opacity: 1;
      }
    }
    .rotateInUpRight {
      -webkit-animation-name: rotateInUpRight;
      -moz-animation-name: rotateInUpRight;
      -o-animation-name: rotateInUpRight;
      animation-name: rotateInUpRight;
    }
    @-webkit-keyframes rotateInDownRight {
      0% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
    }
    @-moz-keyframes rotateInDownRight {
      0% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
    }
    @-o-keyframes rotateInDownRight {
      0% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
    }
    @keyframes rotateInDownRight {
      0% {
        transform-origin: right bottom;
        transform: rotate(90deg);
        opacity: 0;
      }
      100% {
        transform-origin: right bottom;
        transform: rotate(0);
        opacity: 1;
      }
    }
    .rotateInDownRight {
      -webkit-animation-name: rotateInDownRight;
      -moz-animation-name: rotateInDownRight;
      -o-animation-name: rotateInDownRight;
      animation-name: rotateInDownRight;
    }
    @-webkit-keyframes rotateOut {
      0% {
        -webkit-transform-origin: center center;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -webkit-transform-origin: center center;
        -webkit-transform: rotate(200deg);
        opacity: 0;
      }
    }
    @-moz-keyframes rotateOut {
      0% {
        -moz-transform-origin: center center;
        -moz-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -moz-transform-origin: center center;
        -moz-transform: rotate(200deg);
        opacity: 0;
      }
    }
    @-o-keyframes rotateOut {
      0% {
        -o-transform-origin: center center;
        -o-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -o-transform-origin: center center;
        -o-transform: rotate(200deg);
        opacity: 0;
      }
    }
    @keyframes rotateOut {
      0% {
        transform-origin: center center;
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        transform-origin: center center;
        transform: rotate(200deg);
        opacity: 0;
      }
    }
    .rotateOut {
      -webkit-animation-name: rotateOut;
      -moz-animation-name: rotateOut;
      -o-animation-name: rotateOut;
      animation-name: rotateOut;
    }
    @-webkit-keyframes rotateOutUpLeft {
      0% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(-90deg);
        opacity: 0;
      }
    }
    @-moz-keyframes rotateOutUpLeft {
      0% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(-90deg);
        opacity: 0;
      }
    }
    @-o-keyframes rotateOutUpLeft {
      0% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(-90deg);
        opacity: 0;
      }
    }
    @keyframes rotateOutUpLeft {
      0% {
        transform-origin: left bottom;
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        -transform-origin: left bottom;
        -transform: rotate(-90deg);
        opacity: 0;
      }
    }
    .rotateOutUpLeft {
      -webkit-animation-name: rotateOutUpLeft;
      -moz-animation-name: rotateOutUpLeft;
      -o-animation-name: rotateOutUpLeft;
      animation-name: rotateOutUpLeft;
    }
    @-webkit-keyframes rotateOutDownLeft {
      0% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -webkit-transform-origin: left bottom;
        -webkit-transform: rotate(90deg);
        opacity: 0;
      }
    }
    @-moz-keyframes rotateOutDownLeft {
      0% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -moz-transform-origin: left bottom;
        -moz-transform: rotate(90deg);
        opacity: 0;
      }
    }
    @-o-keyframes rotateOutDownLeft {
      0% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -o-transform-origin: left bottom;
        -o-transform: rotate(90deg);
        opacity: 0;
      }
    }
    @keyframes rotateOutDownLeft {
      0% {
        transform-origin: left bottom;
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        transform-origin: left bottom;
        transform: rotate(90deg);
        opacity: 0;
      }
    }
    .rotateOutDownLeft {
      -webkit-animation-name: rotateOutDownLeft;
      -moz-animation-name: rotateOutDownLeft;
      -o-animation-name: rotateOutDownLeft;
      animation-name: rotateOutDownLeft;
    }
    @-webkit-keyframes rotateOutUpRight {
      0% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(90deg);
        opacity: 0;
      }
    }
    @-moz-keyframes rotateOutUpRight {
      0% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(90deg);
        opacity: 0;
      }
    }
    @-o-keyframes rotateOutUpRight {
      0% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(90deg);
        opacity: 0;
      }
    }
    @keyframes rotateOutUpRight {
      0% {
        transform-origin: right bottom;
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        transform-origin: right bottom;
        transform: rotate(90deg);
        opacity: 0;
      }
    }
    .rotateOutUpRight {
      -webkit-animation-name: rotateOutUpRight;
      -moz-animation-name: rotateOutUpRight;
      -o-animation-name: rotateOutUpRight;
      animation-name: rotateOutUpRight;
    }
    @-webkit-keyframes rotateOutDownRight {
      0% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -webkit-transform-origin: right bottom;
        -webkit-transform: rotate(-90deg);
        opacity: 0;
      }
    }
    @-moz-keyframes rotateOutDownRight {
      0% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -moz-transform-origin: right bottom;
        -moz-transform: rotate(-90deg);
        opacity: 0;
      }
    }
    @-o-keyframes rotateOutDownRight {
      0% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(0);
        opacity: 1;
      }
      100% {
        -o-transform-origin: right bottom;
        -o-transform: rotate(-90deg);
        opacity: 0;
      }
    }
    @keyframes rotateOutDownRight {
      0% {
        transform-origin: right bottom;
        transform: rotate(0);
        opacity: 1;
      }
      100% {
        transform-origin: right bottom;
        transform: rotate(-90deg);
        opacity: 0;
      }
    }
    .rotateOutDownRight {
      -webkit-animation-name: rotateOutDownRight;
      -moz-animation-name: rotateOutDownRight;
      -o-animation-name: rotateOutDownRight;
      animation-name: rotateOutDownRight;
    }
    @-webkit-keyframes hinge {
      0% {
        -webkit-transform: rotate(0);
        -webkit-transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
      }
      20%,
      60% {
        -webkit-transform: rotate(80deg);
        -webkit-transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
      }
      40% {
        -webkit-transform: rotate(60deg);
        -webkit-transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
      }
      80% {
        -webkit-transform: rotate(60deg) translateY(0);
        opacity: 1;
        -webkit-transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
      }
      100% {
        -webkit-transform: translateY(700px);
        opacity: 0;
      }
    }
    @-moz-keyframes hinge {
      0% {
        -moz-transform: rotate(0);
        -moz-transform-origin: top left;
        -moz-animation-timing-function: ease-in-out;
      }
      20%,
      60% {
        -moz-transform: rotate(80deg);
        -moz-transform-origin: top left;
        -moz-animation-timing-function: ease-in-out;
      }
      40% {
        -moz-transform: rotate(60deg);
        -moz-transform-origin: top left;
        -moz-animation-timing-function: ease-in-out;
      }
      80% {
        -moz-transform: rotate(60deg) translateY(0);
        opacity: 1;
        -moz-transform-origin: top left;
        -moz-animation-timing-function: ease-in-out;
      }
      100% {
        -moz-transform: translateY(700px);
        opacity: 0;
      }
    }
    @-o-keyframes hinge {
      0% {
        -o-transform: rotate(0);
        -o-transform-origin: top left;
        -o-animation-timing-function: ease-in-out;
      }
      20%,
      60% {
        -o-transform: rotate(80deg);
        -o-transform-origin: top left;
        -o-animation-timing-function: ease-in-out;
      }
      40% {
        -o-transform: rotate(60deg);
        -o-transform-origin: top left;
        -o-animation-timing-function: ease-in-out;
      }
      80% {
        -o-transform: rotate(60deg) translateY(0);
        opacity: 1;
        -o-transform-origin: top left;
        -o-animation-timing-function: ease-in-out;
      }
      100% {
        -o-transform: translateY(700px);
        opacity: 0;
      }
    }
    @keyframes hinge {
      0% {
        transform: rotate(0);
        transform-origin: top left;
        animation-timing-function: ease-in-out;
      }
      20%,
      60% {
        transform: rotate(80deg);
        transform-origin: top left;
        animation-timing-function: ease-in-out;
      }
      40% {
        transform: rotate(60deg);
        transform-origin: top left;
        animation-timing-function: ease-in-out;
      }
      80% {
        transform: rotate(60deg) translateY(0);
        opacity: 1;
        transform-origin: top left;
        animation-timing-function: ease-in-out;
      }
      100% {
        transform: translateY(700px);
        opacity: 0;
      }
    }
    .hinge {
      -webkit-animation-name: hinge;
      -moz-animation-name: hinge;
      -o-animation-name: hinge;
      animation-name: hinge;
    }
    @-webkit-keyframes rollIn {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-100%) rotate(-120deg);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(0) rotate(0deg);
      }
    }
    @-moz-keyframes rollIn {
      0% {
        opacity: 0;
        -moz-transform: translateX(-100%) rotate(-120deg);
      }
      100% {
        opacity: 1;
        -moz-transform: translateX(0) rotate(0deg);
      }
    }
    @-o-keyframes rollIn {
      0% {
        opacity: 0;
        -o-transform: translateX(-100%) rotate(-120deg);
      }
      100% {
        opacity: 1;
        -o-transform: translateX(0) rotate(0deg);
      }
    }
    @keyframes rollIn {
      0% {
        opacity: 0;
        transform: translateX(-100%) rotate(-120deg);
      }
      100% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
      }
    }
    .rollIn {
      -webkit-animation-name: rollIn;
      -moz-animation-name: rollIn;
      -o-animation-name: rollIn;
      animation-name: rollIn;
    }
    @-webkit-keyframes rollOut {
      0% {
        opacity: 1;
        -webkit-transform: translateX(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        -webkit-transform: translateX(100%) rotate(120deg);
      }
    }
    @-moz-keyframes rollOut {
      0% {
        opacity: 1;
        -moz-transform: translateX(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        -moz-transform: translateX(100%) rotate(120deg);
      }
    }
    @-o-keyframes rollOut {
      0% {
        opacity: 1;
        -o-transform: translateX(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        -o-transform: translateX(100%) rotate(120deg);
      }
    }
    @keyframes rollOut {
      0% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateX(100%) rotate(120deg);
      }
    }
    .rollOut {
      -webkit-animation-name: rollOut;
      -moz-animation-name: rollOut;
      -o-animation-name: rollOut;
      animation-name: rollOut;
    }
    @-webkit-keyframes lightSpeedIn {
      0% {
        -webkit: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
      60% {
        -webkit: translateX(-20%) skewX(30deg);
        opacity: 1;
      }
      80% {
        -webkit: translateX(0) skewX(-15deg);
        opacity: 1;
      }
      100% {
        -webkit: translateX(0) skewX(0deg);
        opacity: 1;
      }
    }
    @-moz-keyframes lightSpeedIn {
      0% {
        -moz-transform: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
      60% {
        -moz-transform: translateX(-20%) skewX(30deg);
        opacity: 1;
      }
      80% {
        -moz-transform: translateX(0) skewX(-15deg);
        opacity: 1;
      }
      100% {
        -moz-transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
    }
    @-o-keyframes lightSpeedIn {
      0% {
        -o-transform: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
      60% {
        -o-transform: translateX(-20%) skewX(30deg);
        opacity: 1;
      }
      80% {
        -o-transform: translateX(0) skewX(-15deg);
        opacity: 1;
      }
      100% {
        -o-transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
    }
    @keyframes lightSpeedIn {
      0% {
        transform: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
      60% {
        transform: translateX(-20%) skewX(30deg);
        opacity: 1;
      }
      80% {
        transform: translateX(0) skewX(-15deg);
        opacity: 1;
      }
      100% {
        transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
    }
    .lightSpeedIn {
      -webkit-animation-name: lightSpeedIn;
      -moz-animation-name: lightSpeedIn;
      -o-animation-name: lightSpeedIn;
      animation-name: lightSpeedIn;
      -webkit-animation-timing-function: ease-out;
      -moz-animation-timing-function: ease-out;
      -o-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    .animated.lightSpeedIn {
      -webkit-animation-duration: 0.5s;
      -moz-animation-duration: 0.5s;
      -o-animation-duration: 0.5s;
      animation-duration: 0.5s;
    }
    @-webkit-keyframes lightSpeedOut {
      0% {
        -webkit-transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
      100% {
        -webkit: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
    }
    @-moz-keyframes lightSpeedOut {
      0% {
        -moz-transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
      100% {
        -moz-transform: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
    }
    @-o-keyframes lightSpeedOut {
      0% {
        -o-transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
      100% {
        -o-transform: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
    }
    @keyframes lightSpeedOut {
      0% {
        transform: translateX(0) skewX(0deg);
        opacity: 1;
      }
      100% {
        transform: translateX(100%) skewX(-30deg);
        opacity: 0;
      }
    }
    .lightSpeedOut {
      -webkit-animation-name: lightSpeedOut;
      -moz-animation-name: lightSpeedOut;
      -o-animation-name: lightSpeedOut;
      animation-name: lightSpeedOut;
      -webkit-animation-timing-function: ease-in;
      -moz-animation-timing-function: ease-in;
      -o-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    .animated.lightSpeedOut {
      -webkit-animation-duration: 0.25s;
      -moz-animation-duration: 0.25s;
      -o-animation-duration: 0.25s;
      animation-duration: 0.25s;
    }
    @-webkit-keyframes wiggle {
      0% {
        -webkit: skewX(9deg);
      }
      10% {
        -webkit: skewX(-8deg);
      }
      20% {
        -webkit: skewX(7deg);
      }
      30% {
        -webkit: skewX(-6deg);
      }
      40% {
        -webkit: skewX(5deg);
      }
      50% {
        -webkit: skewX(-4deg);
      }
      60% {
        -webkit: skewX(3deg);
      }
      70% {
        -webkit: skewX(-2deg);
      }
      80% {
        -webkit: skewX(1deg);
      }
      90% {
        -webkit: skewX(0deg);
      }
      100% {
        -webkit: skewX(0deg);
      }
    }
    @-moz-keyframes wiggle {
      0% {
        -moz-transform: skewX(9deg);
      }
      10% {
        -moz-transform: skewX(-8deg);
      }
      20% {
        -moz-transform: skewX(7deg);
      }
      30% {
        -moz-transform: skewX(-6deg);
      }
      40% {
        -moz-transform: skewX(5deg);
      }
      50% {
        -moz-transform: skewX(-4deg);
      }
      60% {
        -moz-transform: skewX(3deg);
      }
      70% {
        -moz-transform: skewX(-2deg);
      }
      80% {
        -moz-transform: skewX(1deg);
      }
      90% {
        -moz-transform: skewX(0deg);
      }
      100% {
        -moz-transform: skewX(0deg);
      }
    }
    @-o-keyframes wiggle {
      0% {
        -o-transform: skewX(9deg);
      }
      10% {
        -o-transform: skewX(-8deg);
      }
      20% {
        -o-transform: skewX(7deg);
      }
      30% {
        -o-transform: skewX(-6deg);
      }
      40% {
        -o-transform: skewX(5deg);
      }
      50% {
        -o-transform: skewX(-4deg);
      }
      60% {
        -o-transform: skewX(3deg);
      }
      70% {
        -o-transform: skewX(-2deg);
      }
      80% {
        -o-transform: skewX(1deg);
      }
      90% {
        -o-transform: skewX(0deg);
      }
      100% {
        -o-transform: skewX(0deg);
      }
    }
    @keyframes wiggle {
      0% {
        transform: skewX(9deg);
      }
      10% {
        transform: skewX(-8deg);
      }
      20% {
        transform: skewX(7deg);
      }
      30% {
        transform: skewX(-6deg);
      }
      40% {
        transform: skewX(5deg);
      }
      50% {
        transform: skewX(-4deg);
      }
      60% {
        transform: skewX(3deg);
      }
      70% {
        transform: skewX(-2deg);
      }
      80% {
        transform: skewX(1deg);
      }
      90% {
        transform: skewX(0deg);
      }
      100% {
        transform: skewX(0deg);
      }
    }
    .wiggle {
      -webkit-animation-name: wiggle;
      -moz-animation-name: wiggle;
      -o-animation-name: wiggle;
      animation-name: wiggle;
      -webkit-animation-timing-function: ease-in;
      -moz-animation-timing-function: ease-in;
      -o-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    .animated.wiggle {
      -webkit-animation-duration: 0.75s;
      -moz-animation-duration: 0.75s;
      -o-animation-duration: 0.75s;
      animation-duration: 0.75s;
    }
    

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    nav,
    section {
      display: block;
    }
    audio[controls],
    canvas,
    video {
      display: inline-block;
      *display: inline;
      *zoom: 1;
    }
    html {
      font-size: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      font-size: 13px;
      line-height: 1.231;
    }
    body,
    button,
    input,
    select,
    textarea {
      font-family: sans-serif;
      color: #222;
    }
    ::-moz-selection {
      background: #fff;
      color: #000;
      text-shadow: none;
    }
    ::selection {
      background: #fff;
      color: #000;
      text-shadow: none;
    }
    a {
      color: #00e;
    }
    a:visited {
      color: #551a8b;
    }
    a:focus {
      outline: thin dotted;
    }
    a:hover,
    a:active {
      outline: 0;
    }
    abbr[title] {
      border-bottom: 1px dotted;
    }
    b,
    strong {
      font-weight: bold;
    }
    blockquote {
      margin: 1em 40px;
    }
    dfn {
      font-style: italic;
    }
    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      margin: 1em 0;
      padding: 0;
    }
    ins {
      background: #ff9;
      color: #000;
      text-decoration: none;
    }
    mark {
      background: #ff0;
      color: #000;
      font-style: italic;
      font-weight: bold;
    }
    pre,
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      _font-family: 'courier new', monospace;
      font-size: 1em;
    }
    pre {
      white-space: pre;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    q {
      quotes: none;
    }
    q:before,
    q:after {
      content: '';
      content: none;
    }
    small {
      font-size: 85%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    ul,
    ol {
      margin: 1em 0;
      padding: 0 0 0 40px;
    }
    dd {
      margin: 0 0 0 40px;
    }
    nav ul,
    nav ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    img {
      border: 0;
      -ms-interpolation-mode: bicubic;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    figure {
      margin: 0;
    }
    form {
      margin: 0;
    }
    fieldset {
      border: 0;
      margin: 0;
      padding: 0;
    }
    legend {
      border: 0;
      *margin-left: -7px;
      padding: 0;
    }
    label {
      cursor: pointer;
    }
    button,
    input,
    select,
    textarea {
      font-size: 100%;
      margin: 0;
      vertical-align: baseline;
      *vertical-align: middle;
    }
    button,
    input {
      line-height: normal;
      *overflow: visible;
    }
    button,
    input[type='button'],
    input[type='reset'],
    input[type='submit'] {
      cursor: pointer;
      -webkit-appearance: button;
    }
    input[type='checkbox'],
    input[type='radio'] {
      box-sizing: border-box;
    }
    input[type='search'] {
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }
    button::-moz-focus-inner,
    input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    textarea {
      overflow: auto;
      vertical-align: top;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    html {
      text-align: center;
      overflow-y: scroll;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
      -moz-text-size-adjust: none;
      -ms-text-size-adjust: none;
      text-size-adjust: none;
      height: 100%;
      font-size: 62.5%;
      margin: 0;
      padding: 0;
    }
    body {
      font-size: 12px;
      font-size: 1.2rem;
      font-family: Arial, sans-serif;
      text-align: center;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      background: #eee;
    }
    img,
    input,
    textarea {
      max-width: 100%;
    }


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
    .carousel-nav #carroussel {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
    .carousel-nav #carroussel .movie {
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
    .carousel-nav #carroussel .movie + .moveR + li:last-child,
    .carousel-nav #carroussel .movie + .moveR + li:nth-child(4) {
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
    .carousel-nav #carroussel .movie.moveL:first-child,
    .carousel-nav #carroussel .movie.moveL:nth-child(2) {
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
    .carousel-nav #carroussel .movie p {
      font-weight: bold;
    }
    .carousel-nav button {
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
    .carousel-nav button:before,
    .carousel-nav button:after {
      content: '\0020';
      display: table;
    }
    .carousel-nav button:after {
      clear: both;
    }
    .carousel-nav button:hover {
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

    ul#carroussel {
      display: inline-flex;
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
      .carousel-nav ul .movie {
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

  // Render template without shadow DOM
  // createRenderRoot() {
  //   return this;
  // }

  getData() {
 
      fetch('../data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data)
          // this.response = data
          // slides.init(data)
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
      let centroX = document.body.clientWidth / 2
      let centroY = document.body.clientHeight / 2
      let objindex
      const objData = {}
      const objPos = []
      const objName = []
      const objOrder = []

      var horizontalCenter

      /** create main container */
      const ul = document.createElement('ul')
      // var ul = self.shadowRoot.createElement('ul')
      ul.id = 'carroussel'
      $('#movies').appendChild(ul)

      slides.init = function(resp) {
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

        /** Display the results in a horizontal "carousel", showing the box art image, the title, and the IMDB rating for each item */
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
          $('#' + ul.id).appendChild(movie)

          var tw = movie.clientWidth
          var tpos = movie.offsetLeft

          objData[movie.id] = tpos
          objPos[i] = tpos
          objOrder[i] = tpos

          movie.on('click', function() {
            slides.move(movie)
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
    return html`
      <div class="carousel-content wrapper">
        <h2>${this.title}</h2>        
        <p class="visually-hidden">Click, mousewheel or use your keyboard cursor keys</p>
        <nav class="carousel-nav">
        ${this.response
          ? html`${this.response.map(i => html`<lit-slide .dataset=${i}></lit-slide>`)}`
          : '<p>No slides were added!</p>'}
          <slot name="slide"></slot>
          <div id="movies"></div>
          <button class="carousel-btn__prev">&#9668; LEFT</button>
          <button class="carousel-btn__next">RIGHT &#9658;</button>
        </nav>
      </div>
    `
  }
}


// customElements.define('lit-carousel', LitCarousel);