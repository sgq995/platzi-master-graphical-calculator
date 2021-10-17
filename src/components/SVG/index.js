import { renderSVG } from "../../utils/render";

import "./index.css";

function SVG({ width, height, children }) {
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

  renderSVG(children, svg);

  return svg;
}

export default SVG;
