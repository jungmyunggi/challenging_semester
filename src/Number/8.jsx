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

  const [technicalSupport, settechnicalSupport] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    settechnicalSupport(value);
  };

  function go_N_9() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "기술 지원": [technicalSupport],
    };
    console.log(updatedSelectedOptions);

    movePage("/N_9", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>8. 기술 지원: IT인프라 구축 및 유지에 대한 기술 지원이 있나요?</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={technicalSupport === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="예"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={technicalSupport === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="아니오"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 IT 인프라 구축 및 유지에 대한 기술 지원이 있는지를
          묻습니다. 도움이 필요한 경우 "예"를 선택하고, 그렇지 않은 경우
          "아니요"를 선택하십시오.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_9}
          style={{ marginRight: "100px" }}
          disabled={technicalSupport === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
