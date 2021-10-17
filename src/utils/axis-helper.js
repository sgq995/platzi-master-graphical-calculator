import PathBuilder from "./path-builder";

function axisHelper(width, height) {
  const axisPath = new PathBuilder()
    .moveTo(width / 2, 0)
    .verticalLine(height)
    .moveTo(0, height / 2)
    .horizontalLine(width)
    .build();
  axisPath.setAttribute('stroke', 'GoldenRod');

  return axisPath;
}

export default axisHelper;
