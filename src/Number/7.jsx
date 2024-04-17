import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
export let period_ofUse = 0;
export default function N_6() {
  const movePage = useNavigate();
  const location = useLocation();

  const { selectedOptions: initialSelectedOptions } = location.state || {};

  const [periodOfUse, setperiodOfUse] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setperiodOfUse(value);
    if(value === 3){
      period_ofUse = 1;
    }
    else if(value === 4){
      period_ofUse = 2;
    }
    else if(value === 0){
      period_ofUse = 3;
    }
    else if(value === 1){
      period_ofUse = 4;
    }
    else if(value === 2){
      period_ofUse = 5;
    }
  };

 

  function go_N_8() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "사용기간 추측": [periodOfUse],
    };
    console.log(updatedSelectedOptions);

    movePage("/N_8", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>7. 사용기간 추측:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={periodOfUse === 3}
                onChange={handleCheckboxChange}
              />
            }
            label="6개월 미만"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="4"
                checked={periodOfUse === 4}
                onChange={handleCheckboxChange}
              />
            }
            label="6개월~1년"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={periodOfUse === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="1년~3년"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={periodOfUse === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="3년~5년"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={periodOfUse === 2}
                onChange={handleCheckboxChange}
              />
            }
            label="5년 이상"
          />
        </FormGroup>
        <p>안내: 이 질문은 귀하의 사용기간을 추정하기 위한 것입니다. </p>
      </div>{" "}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_8}
          style={{ marginRight: "100px" }}
          disabled={periodOfUse === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}