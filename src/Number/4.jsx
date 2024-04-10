import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

export let weeklyusage = 0;
export default function N_1() {
  const movePage = useNavigate();
  const location = useLocation();

  const { selectedOptions: initialSelectedOptions } = location.state || {};

  const [averageDailyUsage, setaverageDailyUsage] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setaverageDailyUsage(value);
    if(value === 0){
      weeklyusage = 1;
    }
    else if(value === 1){
      weeklyusage = 3;
    }
    else if(value === 2){
      weeklyusage = 5;
    }
    else if(value === 3){
      weeklyusage = 7;
    }
  };

  function go_N_5() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "일 평균 사용량 추측": [averageDailyUsage],
    };
    console.log(updatedSelectedOptions);

    movePage("/N_5", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>4. 주간 사용 횟수:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={averageDailyUsage === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="주 1회"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={averageDailyUsage === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="주 3회"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={averageDailyUsage === 2}
                onChange={handleCheckboxChange}
              />
            }
            label="주 5회"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={averageDailyUsage === 3}
                onChange={handleCheckboxChange}
              />
            }
            label="주 7회"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 귀하의 주간 사용량을 추정하기 위한 것입니다. 귀하의 요구에
          가장 적합한 옵션을 선택하십시오.
        </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_5}
          style={{ marginRight: "100px" }}
          disabled={averageDailyUsage === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
