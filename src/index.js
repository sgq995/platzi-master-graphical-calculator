const svg = document.getElementById('svg');

const SMALL_RADIUS = 2;
const BIG_RADIUS = 5;

const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
point.setAttribute('cx', 320);
point.setAttribute('cy', 240);
point.setAttribute('r', SMALL_RADIUS);
point.setAttribute('fill', 'black');

svg.appendChild(point);

point.addEventListener('mouseenter', function () {
  point.setAttribute('r', BIG_RADIUS);
});

point.addEventListener('mouseleave', function () {
  point.setAttribute('r', SMALL_RADIUS);
});

const inputX = document.getElementById('input-x');
inputX.value = point.getAttribute('cx');
inputX.addEventListener('change', function changeX(event) {
  point.setAttribute('cx', event.target.value || 0);
}, false);

const inputY = document.getElementById('input-y');
inputY.value = point.getAttribute('cy');
inputY.addEventListener('change', function changeY(event) {
  point.setAttribute('cy', event.target.value || 0);
}, false);
