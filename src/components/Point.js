import { toNumber } from "lodash";

import withPlaneTransform from "../hocs/withPlaneTransform";

function Point({ planeHelper, cx, cy, fill }) {
  const SMALL_RADIUS = 2;
  const BIG_RADIUS = 5;

  const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  point.setAttribute('r', SMALL_RADIUS);
  point.setAttribute('fill', fill);
  point.setAttribute('cx', planeHelper.xToSVG(cx));
  point.setAttribute('cy', planeHelper.yToSVG(cy));

  point.addEventListener('mouseenter', function () {
    point.setAttribute('r', BIG_RADIUS);
  }, false);

  point.addEventListener('mouseleave', function () {
    point.setAttribute('r', SMALL_RADIUS);
  });

  return point;
}

const mapAttrToGetter = {
  'cx': function (planeHelper, value) {
    return planeHelper.xFromSVG(
      toNumber(value)
    );
  },

  'cy': function(planeHelper, value) {
    return planeHelper.yFromSVG(
      toNumber(value)
    );
  },
};

const mapAttrToSetter = {
  'cx': function (planeHelper, value) {
    return planeHelper.xToSVG(
      toNumber(value)
    );
  },

  'cy': function (planeHelper, value) {
    return planeHelper.yToSVG(
      toNumber(value)
    );
  },
};

export default withPlaneTransform(Point, mapAttrToGetter, mapAttrToSetter);
