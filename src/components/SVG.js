import { renderSVG } from "../utils/render";

function SVG({ children }) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', 640);
  svg.setAttribute('height', 480);

  renderSVG(children, svg);

  return svg;
}

export default SVG;
