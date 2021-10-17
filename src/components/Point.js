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

export default Point;
