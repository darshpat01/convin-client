import { Card } from "antd";
const History = (props) => (
  <Card
    style={{
      width: 300,
    }}
  >
    <p>{props.title}</p>
    <p>{props.url}</p>
    <p>{props.time}</p>
  </Card>
);
export default History;
