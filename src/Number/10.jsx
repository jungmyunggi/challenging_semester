import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import axios from "axios";
import { weeklyusage } from "./4";
import { usagePerDay } from "./5";
export default function N_6() {
  const movePage = useNavigate();
  const location = useLocation();
  const { selectedOptions: initialSelectedOptions } = location.state || {};
  const [operationSystem, setoperationSystem] = useState();
  const [estimate, setEstimate] = useState([{}, {}, {}]);
  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setoperationSystem(value);
  };
  const baseUrl = "https://50cc-165-229-86-164.ngrok-free.app"
  const aws_linux_url = `${baseUrl}/aws/linux`;
  const azure_linux_url =
    `${baseUrl}/azure/linux`;
  const onpremise_url = `${baseUrl}/on-premise`;
  const aws_windows_url =
    `${baseUrl}/aws/windows`;
  const azure_windows_url =
    `${baseUrl}/azure/windows`;

  function go_N_Result() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
    };
    console.log(updatedSelectedOptions);
    const data = { survey: updatedSelectedOptions }; // 서버에 보낼 데이터

    // 비동기 요청을 저장하는 배열
    let requests = [];

    if (operationSystem == 1) {
      requests.push(axios.post(aws_linux_url, data));
      requests.push(axios.post(azure_linux_url, data));
      requests.push(axios.post(onpremise_url, data));
    } else if (operationSystem == 0) {
      requests.push(axios.post(aws_windows_url, data));
      requests.push(axios.post(azure_windows_url, data));
      requests.push(axios.post(onpremise_url, data));
    }

    // 모든 요청이 완료된 후 처리
    Promise.all(requests)
      .then((responses) => {
        // responses 배열에서 데이터 추출하여 상태 업데이트
        const updatedEstimates = responses.map((response) => response.data);
        setEstimate(updatedEstimates);

        // 페이지 이동
        movePage("/Result", {
          state: { resultData: updatedEstimates },
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>10. 운영체제:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={operationSystem === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="Windows"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={operationSystem === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="Linux"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 귀하의 운영체제를 추정하기 위한 것입니다. 사용하고자
          하는 애플리케이션에 맞춰 선택하십시오.
        </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_Result}
          style={{ marginRight: "100px" }}
          disabled={operationSystem === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
