import Container from "./Container";
import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";
import InputNumber from "./InputNumber";

function PointControls({ point }) {
  return (
    Container({
      children: [
        InputGroup({
          children: [
            InputLabel({ label: 'X' }),
            InputNumber({
              point: point,
              pointAttr: 'cx',
            }),
          ],
        }),
        InputGroup({
          children: [
            InputLabel({ label: 'Y' }),
            InputNumber({
              point: point,
              pointAttr: 'cy',
            }),
          ],
        }),
      ]
    })
  );
}

export default PointControls;
