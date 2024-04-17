import React from "react";
import { LineChart, Line } from "@mui/x-charts/LineChart";

// 사각형 포인트를 렌더링하는 컴포넌트
const SquarePoint = (props) => {
  const { x, y } = props;
  return <rect x={x - 5} y={y - 5} width={10} height={10} fill={props.color} />;
};

// 차트 데이터
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Cloud A",
      data: [65, 59, 80, 81, 56],
      borderColor: "red",
    },
    {
      label: "Cloud B",
      data: [28, 48, 40, 19, 86],
      borderColor: "blue",
    },
    {
      label: "On-premise",
      data: [12, 50, 77, 90, 100],
      borderColor: "green",
    },
  ],
};

export default function M() {
  return (
    <LineChart
      width={1100}
      height={500}
      data={data}
      pointComponent={SquarePoint} // 커스텀 사각형 포인트 컴포넌트 사용
      xAxis={{
        scaleType: "point",
        data: data.labels,
      }}
    />
  );
}
