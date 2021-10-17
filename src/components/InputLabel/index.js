import { render } from "../../utils/render";

import "./index.css";

function InputLabel({ label }) {
  const span = document.createElement('span');
  span.classList.add('input-label');

  render(label, span);

  return span;
}

export default InputLabel;
