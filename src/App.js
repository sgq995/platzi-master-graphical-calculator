import Container from "./components/Container";
import InputGroup from "./components/InputGroup";
import InputLabel from "./components/InputLabel";
import InputNumber from "./components/InputNumber";
import Point from "./components/Point";
import SVG from "./components/SVG";

import { render } from "./utils/render";
import axisHelper from "./utils/axis-helper";
import gridHelper from "./utils/grid-helper";

function App() {
  const div = document.createElement('div');
  div.classList.add('app');

  const width = 640;
  const height = 480;

  const gridPath = gridHelper(width, height, 10);

  const axisPath = axisHelper(width, height);

  const point = Point({
    cx: 320,
    cy: 240,
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

  render(
    [
      svg,
      Container({
        children: [
          InputGroup({
            children: [
              InputLabel({ label: 'X' }),
              InputNumber({
                point: point,
                pointAttr: 'cx',
              }),
            ],
          }),
          InputGroup({
            children: [
              InputLabel({ label: 'Y' }),
              InputNumber({
                point: point,
                pointAttr: 'cy',
              }),
            ],
          }),
        ]
      })
    ],
    div
  );

  return div;
}

export default App;
