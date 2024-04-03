import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { LineChart } from '@mui/x-charts/LineChart';
import SimpleLineChart from './123';
import { display } from "@mui/system";
export default function N_1() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resultData: estimate } = location.state || {};
  function go_Main() {
    navigate("/");
  }
  const data1 = estimate[0];
  const data2 = estimate[1];
  const data3 = estimate[2];

  const result1 = {
    NAME: data1.NAME[Object.keys(data1.NAME)[0]],
    COST: data1.COST[Object.keys(data1.COST)[0]],
    CPU: data1.CPU[Object.keys(data1.CPU)[0]],
    RAM: data1.RAM[Object.keys(data1.RAM)[0]],
    STORAGE: data1.STORAGE[Object.keys(data1.STORAGE)[0]],
    NET: data1.NET[Object.keys(data1.NET)[0]]
  };

  const result2 = {
    NAME: data2.NAME[Object.keys(data2.NAME)[0]],
    COST: data2.COST[Object.keys(data2.COST)[0]],
    VCPU: data2.VCPU[Object.keys(data2.VCPU)[0]],
    RAM: data2.RAM[Object.keys(data2.RAM)[0]],
    STORAGE: data2.STORAGE[Object.keys(data2.STORAGE)[0]],
  };
  const result3 = data3.split(',');

  const priceString1 = String(result1['COST']);
  const priceString2 = String(result2['COST']);
  const priceString3 = result3[0];
  const regex = /[\d\.]+/g;
  const matches1 = priceString1.match(regex);
  let price1 = matches1 ? parseFloat(matches1[0])*1400 : null;

  const matches2 = priceString2.match(regex);
  let price2 = matches2 ? parseFloat(matches2[0])*1400 : null;

  const matches3 = priceString3.match(regex);
  let price3 = matches3 ? parseFloat(matches3[0]) : null;
  
  const A = [0,price1,price1*3,price1*6,price1*12,price1*36,price1*60,price1*120];
  const B = [0,price2,price2*3,price2*6,price2*12,price2*36,price2*60,price2*120];
  const C = [price3,price3,price3,price3,price3,price3,price3,price3];
  const xLabels = [
    '0개월',
    '1개월',
    '3개월',
    '6개월',
    '1년',
    '3년',
    '5년',
    '10년'
  ];
  


  return (
    <div className="result_m">
      <h1 style={{ fontSize: "80px" }}>결과</h1>
      <div style={{ display: "flex", position: "relative" }}>
        <div>
        <LineChart
          width={500}
          height={300}
          series={[
            { data: A, label: 'Cloud A' },
            { data: B, label: 'Cloud B' },
            { data: C, label: 'on-premise' },
            
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
        </div>
      </div>
      <div className="box" style={{ display: "flex", flexDirection: "row" }}>
        <div className="AWS" style={{ display: "flex", flexDirection: "column" }}>
          <h3>Cloud A</h3>
          <b>인스턴스 이름: {result1['NAME']}</b>
          <b>코어 수: {result1['CPU']}개</b>
          <b>RAM: {result1['RAM']}</b>
          <b>저장공간: {result1['STORAGE']}</b>
          <b>네트워크: {result1['NET']}</b>
          <b>가격(month): US${result1['COST']}(대략)</b>
        </div>
        <div style={{ width: "100px" }}></div>
        <div className="Azure" style={{ display: "flex", flexDirection: "column" }}>
          <h3>Cloud B</h3>
          <b>인스턴스 이름: {result2['NAME']}</b>
          <b>코어 수: {result2['VCPU']}</b>
          <b>RAM: {result2['RAM']}</b>
          <b>저장공간: {result2['STORAGE']}</b>
          <b>가격(month): {result2['COST']}</b>
        </div>
        <div style={{ width: "100px" }}></div>
        <div>
          <h3>On-premise</h3>
          {result3.map((item, index) => (
            <p><b key={index}>{item}</b></p>
          ))}
        </div>
      </div>
      <p></p>

      <Button
        variant="contained"
        onClick={go_Main}
        style={{ width: "200px", height: "150px", fontSize: "30px" }}
      >
        다시하기
      </Button>
    </div>
  );
}
