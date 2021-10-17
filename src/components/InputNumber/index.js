import "./index.css";

function InputNumber({ shape, shapeAttr }) {
  const input = document.createElement('input');
  input.classList.add('input')
  input.type = 'number';
  input.value = shape.getAttribute(shapeAttr);

  input.addEventListener('change', function (event) {
    shape.setAttribute(shapeAttr, event.target.value || 0);
  }, false);

  return input;
}

export default InputNumber;
