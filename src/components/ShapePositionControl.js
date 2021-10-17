import Container from "./Container";
import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";
import InputNumber from "./InputNumber";

function ShapePositionControl({ shape, shapeXAttr, shapeYAttr }) {
  return (
    Container({
      children: [
        InputGroup({
          children: [
            InputLabel({ label: 'X' }),
            InputNumber({
              shape,
              shapeAttr: shapeXAttr,
            }),
          ],
        }),
        InputGroup({
          children: [
            InputLabel({ label: 'Y' }),
            InputNumber({
              shape: shape,
              shapeAttr: shapeYAttr,
            }),
          ],
        }),
      ]
    })
  );
}

export default ShapePositionControl;
