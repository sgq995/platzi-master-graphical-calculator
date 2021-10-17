import { render } from "../utils/render";

function InputLabel({ label }) {
  const span = document.createElement('span');

  render(label, span);

  return span;
}

export default InputLabel;
