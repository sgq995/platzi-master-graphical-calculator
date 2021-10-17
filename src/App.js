import Bar from "./components/Bar";
import Container from "./components/Container";
import Point from "./components/Point";
import ShapePositionControl from "./components/ShapePositionControl";
import SVG from "./components/SVG";

import { render } from "./utils/render";
import axisHelper from "./utils/axis-helper";
import gridHelper from "./utils/grid-helper";
import PlaneHelper from "./utils/plane-helper";

import "./App.css";

function App() {
  const div = document.createElement('div');
  div.classList.add('app');

  const width = 640;
  const height = 480;

  const gridPath = gridHelper(width, height, 10);

  const axisPath = axisHelper(width, height);

  const planeHelper = new PlaneHelper(width, height, -5, 5, 5, -5);

  const point = Point({
    planeHelper,
    cx: 0,
    cy: 0,
    fill: 'black'
  });
  
  const bars = new Array(5).fill().map((_, index) => Bar({
    planeHelper,
    x: index,
    y: 0,
    fill: 'black',
  }));

  const svg = SVG({
    width,
    height,
    children: [
      gridPath,
      axisPath,
      // point,
      // bars,
    ],
  });

  const pointButton = document.createElement('button');
  pointButton.textContent = 'Point';
  pointButton.addEventListener('click', function (event) {
    svg.appendChild(point);
    bars.forEach(child => child.remove());

    div.appendChild(pointControl);
    barsControls.forEach(child => child.remove());
  });

  const barsButton = document.createElement('button');
  barsButton.textContent = 'Bars';
  barsButton.addEventListener('click', function (event) {
    point.remove();
    bars.forEach(child => svg.appendChild(child));

    pointControl.remove();
    barsControls.forEach(child => div.appendChild(child));
  });

  const interfaceSelector = Container({
    children: [
      pointButton,
      barsButton,
    ],
  });

  const pointControl = ShapePositionControl({
    shape: point,
    shapeXAttr: 'cx',
    shapeYAttr: 'cy'
  });

  const barsControls = bars.map(bar => ShapePositionControl({
    shape: bar,
    shapeXAttr: 'x',
    shapeYAttr: 'y',
  }));

  render(
    [
      svg,
      interfaceSelector,
      // pointControl,
      // barsControls,
    ],
    div,
  );

  return div;
}

export default App;
