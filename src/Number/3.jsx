import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

export default function N_3() {
  const movePage = useNavigate();
  const location = useLocation();

  const { selectedOptions: initialSelectedOptions } = location.state || {};

  const [saveData, setsaveData] = useState();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // 숫자로 변환
    setsaveData(value);
  };

  function go_N_4() {
    const updatedSelectedOptions = {
      ...initialSelectedOptions,
      "데이터 저장": [saveData],
    };
    console.log(updatedSelectedOptions);
    movePage("/N_4", { state: { selectedOptions: updatedSelectedOptions } });
  }

  return (
    <div>
      <h1>IT 인프라 필요 조사 양식</h1>
      <h3>3. 데이터 저장:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={saveData === 0}
                onChange={handleCheckboxChange}
              />
            }
            label="아주 적음 (예: 몇 가지 문서나 사진)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={saveData === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="보통 (예: 여러 문서나 사진)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={saveData === 2}
                onChange={handleCheckboxChange}
              />
            }
            label="많음 (예: 큰 파일이나 비디오)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={saveData === 3}
                onChange={handleCheckboxChange}
              />
            }
            label="아주 많음 (예: 많은 비디오나 대용량 파일)"
          />
        </FormGroup>
        <p>
          안내: 이 질문은 컴퓨터 또는 서버에 저장해야 하는 정보량을 묻습니다.
          귀하의 요구에 가장 적합한 옵션을 선택하십시오.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          onClick={go_N_4}
          style={{ marginRight: "100px" }}
          disabled={saveData === undefined}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
