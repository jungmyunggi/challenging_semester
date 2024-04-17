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

  const [futureGrowth, setfutureGrowth] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setfutureGrowth(value);
  };

  function go_N_10() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "미래 성장": [futureGrowth],
    };
    console.log(updatedSelectedOptions);

    movePage("/N_10", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>9. 미래: 앞으로 IT인프라가 더 필요할 것으로 예상하십니까?</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={futureGrowth === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="예"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={futureGrowth === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="아니오"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 앞으로 IT 인프라가 더 필요할 것으로 예상하는지를
          묻습니다. 미래에 더 필요하다고 생각하는 경우 "예"를 선택하고, 그렇지
          않은 경우 "아니요"를 선택하십시오.
        </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_10}
          style={{ marginRight: "100px" }}
          disabled={futureGrowth === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
