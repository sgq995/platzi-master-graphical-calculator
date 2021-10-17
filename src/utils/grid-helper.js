import PathBuilder from "./path-builder";

function gridHelper(width, height, lines) {
  const gridBuilder = new PathBuilder();
  for (let v = 1; v < lines; ++v) {
    gridBuilder.moveTo(v * width / lines, 0);
    gridBuilder.verticalLine(height);
  }
  for (let h = 1; h < lines; ++h) {
    gridBuilder.moveTo(0, h * height / lines);
    gridBuilder.horizontalLine(width);
  }

  const gridPath = gridBuilder.build();
  gridPath.setAttribute('stroke', 'Cornsilk');

  return gridPath;
}

export default gridHelper;
