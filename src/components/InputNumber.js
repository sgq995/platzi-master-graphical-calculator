function InputNumber({ point, pointAttr }) {
  const input = document.createElement('input');
  input.type = 'number';
  input.value = point.getAttribute(pointAttr);

  input.addEventListener('change', function (event) {
    point.setAttribute(pointAttr, event.target.value || 0);
  }, false);

  return input;
}

export default InputNumber;
