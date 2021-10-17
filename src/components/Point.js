function Point({ cx, cy, fill }) {
  const SMALL_RADIUS = 2;
  const BIG_RADIUS = 5;

  const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  point.setAttribute('r', SMALL_RADIUS);
  point.setAttribute('fill', 'black');
  point.setAttribute('cx', cx);
  point.setAttribute('cy', cy);

  point.addEventListener('mouseenter', function () {
    point.setAttribute('r', BIG_RADIUS);
  }, false);

  point.addEventListener('mouseleave', function () {
    point.setAttribute('r', SMALL_RADIUS);
  });

  const setAttribute = point.setAttribute.bind(point);
  point.setAttribute = function (qualifiedName, value) {
    console.log({ qualifiedName, value });
    switch (qualifiedName) {
      case 'cx':
        setAttribute(qualifiedName, value);
        break;

      case 'cy':
        setAttribute(qualifiedName, value);
        break;

      default: point.setAttribute('cx', cx);
        setAttribute(qualifiedName, value);
        break;
    }
  }

  const getAttribute = point.getAttribute.bind(point);
  point.getAttribute = function (qualifiedName) {
    switch (qualifiedName) {
      case 'cx':
        return getAttribute(qualifiedName);

      case 'cy':
        return getAttribute(qualifiedName);

      default:
        return getAttribute(qualifiedName);
    }
  }

  return point;
}

export default Point;
