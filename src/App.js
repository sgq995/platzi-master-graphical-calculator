import Container from "./components/Container";
import InputGroup from "./components/InputGroup";
import InputLabel from "./components/InputLabel";
import InputNumber from "./components/InputNumber";
import Point from "./components/Point";
import SVG from "./components/SVG";

import { render } from "./utils/render";

function App() {
  const div = document.createElement('div');
  div.classList.add('app');

  const point = Point({
    cx: 320,
    cy: 240,
    fill: 'black'
  });

  render(
    [
      SVG({ children: point, }),
      Container({
        children: [
          InputGroup({
            children: [
              InputLabel({ label: 'X' }),
              InputNumber({
                point,
                pointAttr: 'cx',
              }),
            ],
          }),
          InputGroup({
            children: [
              InputLabel({ label: 'Y' }),
              InputNumber({
                point,
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
