import { toNumber } from "lodash";

function Point({ planeHelper, cx, cy, fill }) {
  const SMALL_RADIUS = 2;
  const BIG_RADIUS = 5;

  const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  point.setAttribute('r', SMALL_RADIUS);
  point.setAttribute('fill', fill);

  point.addEventListener('mouseenter', function () {
    point.setAttribute('r', BIG_RADIUS);
  }, false);

  point.addEventListener('mouseleave', function () {
    point.setAttribute('r', SMALL_RADIUS);
  });

  const setAttribute = point.setAttribute.bind(point);
  point.setAttribute = function (qualifiedName, value) {
    switch (qualifiedName) {
      case 'cx':
        setAttribute(
          qualifiedName,
          planeHelper.xToSVG(
            toNumber(value)
          )
        );
        break;

      case 'cy':
        setAttribute(
          qualifiedName,
          planeHelper.yToSVG(
            toNumber(value)
          )
        );
        break;

      default:
        setAttribute(qualifiedName, value);
        break;
    }
  }

  const getAttribute = point.getAttribute.bind(point);
  point.getAttribute = function (qualifiedName) {
    switch (qualifiedName) {
      case 'cx':
        return planeHelper.xFromSVG(
          toNumber(
            getAttribute(qualifiedName)
          )
        );

      case 'cy':
        return planeHelper.yFromSVG(
          toNumber(
            getAttribute(qualifiedName)
          )
        );

      default:
        return getAttribute(qualifiedName);
    }
  }

  point.setAttribute('cx', cx);
  point.setAttribute('cy', cy);

  return point;
}

export default Point;
