import { render } from "../../utils/render";

import "./index.css";

function InputGroup({ children }) {
  const div = document.createElement('div');
  div.classList.add('input-group');

  render(children, div);

  return div;
}

export default InputGroup;
