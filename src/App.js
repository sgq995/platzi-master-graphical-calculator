import Point from "./components/Point";
import PointControls from "./components/PointControls";
import SVG from "./components/SVG";

import { render } from "./utils/render";
import axisHelper from "./utils/axis-helper";
import gridHelper from "./utils/grid-helper";
import PlaneHelper from "./utils/plane-helper";

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

  const svg = SVG({
    width,
    height,
    children: [
      gridPath,
      axisPath,
      point,
    ],
  });

  const controls = PointControls({ point, });

  render(
    [
      svg,
      controls,
    ],
    div
  );

  return div;
}

export default App;
