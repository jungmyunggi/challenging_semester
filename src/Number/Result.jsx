import Button from "@mui/material/Button";
import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';
import { weeklyusage } from "./4";
import { usagePerDay } from "./5";
import { period_ofUse } from "./7";
import { Gauge } from '@mui/x-charts/Gauge';
import { positions } from "@mui/system";

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
  console.log(estimate);
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
  const result3 = {
    COST: data3.Cost ? data3.Cost[Object.keys(data3.Cost)[0]] : null,
    CPU: data3[" CPU"] ? data3[" CPU"][Object.keys(data3[" CPU"])[0]] : null,
    GPU: data3[" GPU"] ? data3[" GPU"][Object.keys(data3[" GPU"])[0]] : null,
    RAM: data3[" RAM"] ? data3[" RAM"][Object.keys(data3[" RAM"])[0]] : null,
    STORAGE: data3[" Storage"] ? data3[" Storage"][Object.keys(data3[" Storage"])[0]] : null,
  };

  const priceString1 = String(result1['COST']);
  const priceString2 = String(result2['COST']);
  const priceString3 = String(result3['COST']);

  const basicElectricCharges = 1030;
  const additionalCharge = 120;

  const matches1 = priceString1.match(/[+-]?([0-9]*[.])?[0-9]+/g);
  let price1 = matches1 ? parseFloat(matches1[0]) * 1300 : null;

  const matches2 = priceString2.match(/[+-]?([0-9]*[.])?[0-9]+/g);
  let price2 = matches2 ? parseFloat(matches2[0]) * 1300 : null;

  const matches3 = priceString3;
  let price3 = parseFloat(matches3);

  price1 = price1 * usagePerDay * weeklyusage * 4;
  price2 = price2 * usagePerDay * weeklyusage * 4;
  
  const A = [0, price1, price1 * 3, price1 * 6, price1 * 12, price1 * 36, price1 * 60];
  const B = [0, price2, price2 * 3, price2 * 6, price2 * 12, price2 * 36, price2 * 60];
  const C = [price3, price3, price3 , price3 , price3 , price3 , price3 ];
  const xLabels = [
    '0개월',
    '1개월',
    '3개월',
    '6개월',
    '1년',
    '3년',
    '5년'
  ];

  const benefit = { 
    '1개월': Math.min(price1,price2,price3),
    '3개월': Math.min(price1*3,price2*3,price3),
    '6개월': Math.min(price1*6,price2*6,price3),
    '1년': Math.min(price1*12,price2*12,price3),
    '3년': Math.min(price1*36,price2*36,price3),
    '5년': Math.min(price1*60,price2*60,price3)

  }
  let boxPosition = 0;
      if ((period_ofUse === 1)) {
        boxPosition = 820;
      }else if(period_ofUse === 2){
        boxPosition = 985; 
      }else if(period_ofUse === 3){
        boxPosition = 1155; 
      }else if(period_ofUse === 4){
        boxPosition = 1320; 
      }else if(period_ofUse === 5){
        boxPosition = 1490; 
      }
      
  return (
    <div className="result_m" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", overflow: "visible", alignItems: "center", justifyContent: "center" }}>

      <div>
        <h1 style={{ fontSize: "50px" }}>결과</h1>
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

        <div className="Azure" style={{ display: "flex", flexDirection: "column" }}>
          <h3>On - premise</h3>
          <b>CPU: {result3['CPU']}</b>
          <b>RAM: {result3['RAM']}</b>
          <b>GPU: {result3['GPU']}</b>
          <b>저장공간: {result3['STORAGE']}</b>
          <b>가격: {result3['COST']}</b>
        </div>
        <div style={{ width: "100px" }}></div>
      </div>
      <div style={{ width: "1300px", display: "flex" }}>
        {/* <div style={{position:"absolute", backgroundColor:"yellowgreen" ,width:`170px`, height:"400px", className:"period", marginTop:"50px",left:`${boxPosition}px` }}></div> */}
        <LineChart
          width={1100}
          height={500}
          series={[
            { data: A, label: 'Cloud A' },
            { data: B, label: 'Cloud B' },
            { data: C, label: 'on-premise' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
      </div>
          

      <Button
        variant="contained"
        onClick={go_Main}
        style={{ width: "100px", height: "50px", fontSize: "15px" }}
      >
        다시하기
      </Button>
          <button onClick={() => {
            console.log(period_ofUse);

          }}>asdf</button>
    </div>
  );
}
