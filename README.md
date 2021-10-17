# Calculator
Graphical calculator making use of SVG element.

## Description
This is a graphical calculator for Platzi Master technical test. You can switch between point and bars modes, you can control it by making use of the controls available.

## Use
1. Go to https://sgq995.github.io/platzi-master-graphical-calculator

2. Select a mode by clicking one of the buttons at the bottom (Point or Bars).

3. If you have selected "Point":
	1. Change the value of X to move the point in X coordinate.
	2. Change the value of Y to move the point in Y coordinate.
	3. You can press "Enter" after change the value to see it in the graph.

4. If you have selected "Bars":
	1. There are 5 bars, you can control each of them with the X, Y inputs at bottom.
	2. The first input pair (up to bottom) is related to the first bar (left to right).
	3. Change the values of X, Y and see how the bar changes.

## Build
1. Get the repo
```
git clone https://github.com/sgq995/platzi-master-graphical-calculator
```

2. Make sure you have installed NodeJS, then run:
```
npm install
```
Wait until the module installation has finished.

3. To run locally:
```
npm start
```

4. If you want to generate a static HTML and minified Javascript version:
```
npm run build
```

## License
[MIT](./LICENSE)
