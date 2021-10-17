import { trim } from "lodash";

import { renderSVG } from "../../utils/render";

import "./index.css";

class PlaneBuilder {
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

function SVG({ children }) {
  const width = 640;
  const height = 480;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'plotter');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);

  // const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  // path.setAttribute('d', `M ${width / 2} 0 V ${height} M 0 ${height / 2} H ${width}`);
  // path.setAttribute('stroke', 'GoldenRod');
  // renderSVG(path, svg);

  const LINES = 10;

  const gridBuilder = new PlaneBuilder();
  for (let v = 1; v < LINES; ++v) {
    gridBuilder.moveTo(v * width / LINES, 0);
    gridBuilder.verticalLine(height);
  }
  for (let h = 1; h < LINES; ++h) {
    gridBuilder.moveTo(0, h * height / LINES);
    gridBuilder.horizontalLine(width);
  }
  const gridPath = gridBuilder.build();
  gridPath.setAttribute('stroke', 'Cornsilk');
  renderSVG(gridPath, svg);

  const axisPath = new PlaneBuilder()
    .moveTo(width / 2, 0)
    .verticalLine(height)
    .moveTo(0, height / 2)
    .horizontalLine(width)
    .build();
  axisPath.setAttribute('stroke', 'GoldenRod');
  renderSVG(axisPath, svg);

  renderSVG(children, svg);

  return svg;
}

export default SVG;
