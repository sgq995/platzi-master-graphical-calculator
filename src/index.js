import { isArray, isNumber, isString } from "lodash";

/**
 * 
 * @param {HTMLElement} element 
 * @param {HTMLElement} container 
 * @returns 
 */
function render(element, container) {
  if (isArray(element)) {
    element.forEach(child => container.appendChild(child));
  } else if (element instanceof HTMLElement) {
    container.appendChild(element);
  } else if (isString(element) || isNumber(element)) {
    container.textContent = element;
  }
}

/**
 * 
 * @param {SVGElement} element 
 * @param {SVGSVGElement} container 
 */
function renderSVG(element, container) {
  if (isArray(element)) {
    element.forEach(child => container.appendChild(child));
  } else if (element instanceof SVGElement) {
    container.appendChild(element);
  }
}

// Components
function SVG({ children }) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', 640);
  svg.setAttribute('height', 480);

  renderSVG(children, svg);

  return svg;
}

function Container({ children }) {
  const div = document.createElement('div');
  div.classList.add('container');

  render(children, div);

  return div;
}

function InputGroup({ children }) {
  const div = document.createElement('div');
  div.classList.add('input-group');

  render(children, div);

  return div;
}

function InputLabel({ label }) {
  const span = document.createElement('span');
  
  render(label, span);

  return span;
}

function InputNumber({ point, pointAttr }) {
  const input = document.createElement('input');
  input.type = 'number';
  input.value = point.getAttribute(pointAttr);

  input.addEventListener('change', function (event) {
    point.setAttribute(pointAttr, event.target.value || 0);
  }, false);

  return input;
}

function Point({ cx, cy, fill }) {
  const SMALL_RADIUS = 2;
  const BIG_RADIUS = 5;

  const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  point.setAttribute('cx', 320);
  point.setAttribute('cy', 240);
  point.setAttribute('r', SMALL_RADIUS);
  point.setAttribute('fill', 'black');

  point.addEventListener('mouseenter', function () {
    point.setAttribute('r', BIG_RADIUS);
  }, false);

  point.addEventListener('mouseleave', function () {
    point.setAttribute('r', SMALL_RADIUS);
  });

  return point;
}

// App
const point = Point({
  cx: 320,
  cy: 240,
  fill: 'black'
});

// Rendering
const root = document.getElementById('root');
render([
  SVG({ children: point, }),
  Container({
    children: [
      InputGroup({
        children: [
          InputLabel({ label: 'X' }),
          InputNumber({
            point,
            pointAttr: 'cx',
          }),
        ],
      }),
      InputGroup({
        children: [
          InputLabel({ label: 'Y' }),
          InputNumber({
            point,
            pointAttr: 'cy',
          }),
        ],
      }),
    ]
  })
], root);
