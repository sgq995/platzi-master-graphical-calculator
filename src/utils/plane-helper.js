class PlaneHelper {
  constructor(svgWidth, svgHeight, minX, maxX, minY, maxY) {
    this.svgWidth = svgWidth;
    this.svgHeight = svgHeight;
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
  }

  _interpolate(val, srcMin, srcMax, dstMin, dstMax) {
    return (val - srcMin) / (srcMax - srcMin) * (dstMax - dstMin) + dstMin;
  }

  xToSVG(x) {
    return this._interpolate(x, this.minX, this.maxX, 0, this.svgWidth);
  }

  yToSVG(y) {
    return this._interpolate(y, this.minY, this.maxY, 0, this.svgHeight);
  }

  toSVG(x, y) {
    return {
      x: this.xToSVG(x),
      y: this.yToSVG(y),
    };
  }

  xFromSVG(x) {
    return this._interpolate(x, 0, this.svgWidth, this.minX, this.maxX);
  }

  yFromSVG(y) {
    return this._interpolate(y, 0, this.svgHeight, this.minY, this.maxY);
  }

  fromSVG(x, y) {
    return {
      x: this.xFromSVG(x),
      y: this.yFromSVG(y),
    };
  }
}

export default PlaneHelper;
