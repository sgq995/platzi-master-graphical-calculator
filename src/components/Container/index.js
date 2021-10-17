import { render } from "../../utils/render";

import "./index.css";

function Container({ children }) {
  const div = document.createElement('div');
  div.classList.add('container');

  render(children, div);

  return div;
}

export default Container;
