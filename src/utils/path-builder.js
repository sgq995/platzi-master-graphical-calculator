import { trim } from "lodash";

class PathBuilder {
  constructor() {
    this._d = '';
  }

  moveTo(x, y) {
    this._d += `M ${x} ${y} `;

    return this;
  }

  horizontalLine(x) {
    this._d += `H ${x} `;

    return this;
  }

  verticalLine(y) {
    this._d += `V ${y} `;

    return this;
  }

  build() {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', trim(this._d));

    return path;
  }
}

export default PathBuilder;
