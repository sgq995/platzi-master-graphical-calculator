import { toNumber } from "lodash";

import withPlaneTransform from "../hocs/withPlaneTransform";

function Bar({ planeHelper, x, y, fill }) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('fill', fill);
  rect.setAttribute('x', planeHelper.xToSVG(x));
  rect.setAttribute('y', planeHelper.yToSVG(0));
  rect.setAttribute('width', planeHelper.widthToSVG(0.5));
  rect.setAttribute('height', planeHelper.heightToSVG(0));

  rect.setAttribute('stroke', 'DimGrey');
  rect.setAttribute('stroke-width', 0);

  rect.addEventListener('mouseenter', function () {
    rect.setAttribute('stroke-width', 2);
  }, false);

  rect.addEventListener('mouseleave', function () {
    rect.setAttribute('stroke-width', 0);
  });

  return rect;
}

const mapAttrToGetter = {
  'x': function (planeHelper, value) {
    return planeHelper.xFromSVG(
      toNumber(value)
    );
  },

  'y': function (planeHelper, value) {
    return planeHelper.yFromSVG(
      toNumber(value)
    );
  },
};

const mapAttrToSetter = {
  'x': function (planeHelper, value) {
    return planeHelper.xToSVG(
      toNumber(value)
    );
  },

  'y': function (planeHelper, value, element) {
    const newValue = planeHelper.yToSVG(
      toNumber(value)
    );

    const zero = planeHelper.yToSVG(0);
    
    if (newValue <= zero) {
      element.setAttribute('height', zero - newValue);  

      return newValue;
    } else {
      element.setAttribute('height', newValue - zero);

      return zero;
    }
  },
};

export default withPlaneTransform(Bar, mapAttrToGetter, mapAttrToSetter);
