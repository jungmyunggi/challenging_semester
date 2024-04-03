import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

export default function N_5() {
  const movePage = useNavigate();
  const location = useLocation();

  const { selectedOptions: initialSelectedOptions } = location.state || {};

  const [averageDailyUsageHours, setaverageDailyUsageHours] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setaverageDailyUsageHours(value);
  };

  function go_N_6() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "일 평균 사용시간 추측": [averageDailyUsageHours],
    };
    console.log(updatedSelectedOptions);
    movePage("/N_6", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>5. 일 평균 사용시간 추측:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={averageDailyUsageHours === 0}
                onChange={handleCheckboxChange}
              />
            }
            label=" 1시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={averageDailyUsageHours === 1}
                onChange={handleCheckboxChange}
              />
            }
            label=" 3시간 미만"
          />

          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={averageDailyUsageHours === 2}
                onChange={handleCheckboxChange}
              />
            }
            label="
            6시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={averageDailyUsageHours === 3}
                onChange={handleCheckboxChange}
              />
            }
            label="
            
            9시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="4"
                checked={averageDailyUsageHours === 4}
                onChange={handleCheckboxChange}
              />
            }
            label="
            
            12시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="5"
                checked={averageDailyUsageHours === 5}
                onChange={handleCheckboxChange}
              />
            }
            label="
            
            15시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="6"
                checked={averageDailyUsageHours === 6}
                onChange={handleCheckboxChange}
              />
            }
            label="
            18시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="7"
                checked={averageDailyUsageHours === 7}
                onChange={handleCheckboxChange}
              />
            }
            label="
            
            21시간 미만
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="8"
                checked={averageDailyUsageHours === 8}
                onChange={handleCheckboxChange}
              />
            }
            label="21시간 이상"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 귀하의 일 평균 사용 시간을 추정하기 위한 것입니다.
        </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_6}
          style={{ marginRight: "100px" }}
          disabled={averageDailyUsageHours === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
