import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function N_2() {
  const movePage = useNavigate();
  const location = useLocation();

  const { selectedOptions: initialSelectedOptions } = location.state || {};

  const [performanceImportance, setPerformanceImportance] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPerformanceImportance(value);
  };

  function go_N_3() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "성능의 중요성": [performanceImportance],
    };
    console.log(updatedSelectedOptions);
    movePage("/N_3", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>2. 요구성능:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={performanceImportance === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="거의 중요하지 않음 (예: 작업이 느리더라도 문제없음)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={performanceImportance === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="다소 중요함 (예: 가끔 느린 작업이 있어도 괜찮음)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={performanceImportance === 2}
                onChange={handleCheckboxChange}
              />
            }
            label="중요함 (예: 일상적인 작업을 할 때 빠른 반응이 필요함 )"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={performanceImportance === 3}
                onChange={handleCheckboxChange}
              />
            }
            label="매우 중요함 (예: 작업이 항상 빠르고 원활해야 함):"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 컴퓨터 또는 서버의 작동 속도와 원활성이 얼마나
          중요한지를 묻습니다. 귀하의 요구에 가장 적합한 옵션을 선택하십시오.
        </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_3}
          style={{ marginRight: "100px" }}
          disabled={performanceImportance === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
