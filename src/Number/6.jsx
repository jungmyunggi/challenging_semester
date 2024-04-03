import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

export default function N_6() {
  const movePage = useNavigate();
  const location = useLocation();

  const { selectedOptions: initialSelectedOptions } = location.state || {};

  const [usageTimeZone, setusageTimeZone] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setusageTimeZone(value);
  };

  function go_N_7() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "사용시간 대 추측": [usageTimeZone],
    };
    console.log(updatedSelectedOptions);

    movePage("/N_7", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>6. 사용시간 대 추측:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={usageTimeZone === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="하루 내내"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={usageTimeZone === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="주로 주간에"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={usageTimeZone === 2}
                onChange={handleCheckboxChange}
              />
            }
            label="주로 야간에"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={usageTimeZone === 3}
                onChange={handleCheckboxChange}
              />
            }
            label="특정 시간대"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="4"
                checked={usageTimeZone === 4}
                onChange={handleCheckboxChange}
              />
            }
            label="불규칙한 사용"
          />
        </FormGroup>
        <p>안내: 이 질문은 귀하의 사용 시간을 추정하기 위한 것입니다. </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_7}
          style={{ marginRight: "100px" }}
          disabled={usageTimeZone === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
