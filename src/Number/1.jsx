import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Number.css";
import React, { useState } from "react";

export default function N_1() {
  const movePage = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState({
    "목적 및 용도_0": 0,
    "목적 및 용도_1": 0,
    "목적 및 용도_2": 0,
    "목적 및 용도_3": 0,
    "목적 및 용도_4": 0,
    "목적 및 용도_5": 0,
    "목적 및 용도_6": 0,
    "목적 및 용도_7": 0,
    "목적 및 용도_8": 0,
    "목적 및 용도_9": 0,
    "목적 및 용도_10": 0,
    "목적 및 용도_11": 0,
    "목적 및 용도_12": 0,
    "목적 및 용도_13": 0,
    "목적 및 용도_14": 0,
    "목적 및 용도_15": 0,
    "목적 및 용도_16": 0,
    "목적 및 용도_17": 0,
  });
  function handleSubmit() {
    const finalSelectedOptions = Object.keys(selectedOptions).reduce(
      (acc, key) => {
        acc[key] = selectedOptions[key][0] === 1 ? [1] : [0];
        return acc;
      },
      {}
    );
    return finalSelectedOptions;
  }
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // 현재 클릭한 체크박스만 업데이트
    setSelectedOptions((prev) => ({
      ...prev,
      [`목적 및 용도_${value}`]: isChecked ? [1] : [0],
    }));
  };

  function go_N_2() {
    const finalOptions = handleSubmit(); // 수정: handleSubmit의 반환값을 받음
    movePage("/N_2", { state: { selectedOptions: finalOptions } }); // 수정: 반환값을 다음 페이지로 전달
  }
  return (
    <div>
      <h1>IT 인프라 플랜 조사 양식</h1>
      <h3>1. 용도 및 목적:</h3>
      <div className="survey">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="0"
                checked={selectedOptions["목적 및 용도_0"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="이메일 및 인터넷 브라우징"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="1"
                checked={selectedOptions["목적 및 용도_1"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="오피스 작업 (문서 작성, 스프레드시트 사용 등)"
          />
          <p>
            <b>● 디자인 또는 멀티미디어 작업</b>
          </p>
          <FormControlLabel
            control={
              <Checkbox
                value="2"
                checked={selectedOptions["목적 및 용도_2"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="그래픽 디자인 (예: Adobe Photoshop, Illustrator)
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="3"
                checked={selectedOptions["목적 및 용도_3"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="비디오 편집 (예: Adobe Premiere Pro, Final Cut Pro)
            "
          />
          <FormControlLabel
            control={
              <Checkbox
                value="4"
                checked={selectedOptions["목적 및 용도_4"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="오디오 제작 (예: Adobe Audition, Logic Pro)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="5"
                checked={selectedOptions["목적 및 용도_5"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="애니메이션 (예: Autodesk Maya, Blender)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="6"
                checked={selectedOptions["목적 및 용도_6"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="프로그래밍 또는 코딩"
          />
          <p>
            <b>● 게임</b>
          </p>
          <FormControlLabel
            control={
              <Checkbox
                value="7"
                checked={selectedOptions["목적 및 용도_7"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="저사양 (예: 처리 성능이 많이 필요하지 않은 기본 게임)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="8"
                checked={selectedOptions["목적 및 용도_8"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="중간 사양 (예: 중간 수준의 게임으로 평균적인 성능 요구)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="9"
                checked={selectedOptions["목적 및 용도_9"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="고사양 (예: 그래픽 및 처리 성능이 요구되는 고사양 게임)"
          />
          <p>
            <b>● 파일 저장 및 공유</b>
          </p>
          <FormControlLabel
            control={
              <Checkbox
                value="10"
                checked={selectedOptions["목적 및 용도_10"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="개인용 (예: 개인 문서, 사진 등 저장)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="11"
                checked={selectedOptions["목적 및 용도_11"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="업무 관련 (예: 업무 문서, 프로젝트 파일 등 저장)"
          />
          <p>
            <b>● 웹 호스팅</b>
          </p>
          <FormControlLabel
            control={
              <Checkbox
                value="12"
                checked={selectedOptions["목적 및 용도_12"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="기본 (예: 소규모 개인 웹사이트 호스팅)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="13"
                checked={selectedOptions["목적 및 용도_13"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="중간 (예: 중소 규모의 비즈니스 웹사이트 호스팅)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="14"
                checked={selectedOptions["목적 및 용도_14"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="고급 (예: 대규모 웹사이트 또는 웹 애플리케이션 호스팅)"
          />
          <p>
            <b>● 애플리케이션 호스팅</b>
          </p>
          <FormControlLabel
            control={
              <Checkbox
                value="15"
                checked={selectedOptions["목적 및 용도_15"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="기본 (예: 리소스 요구가 낮은 간단한 애플리케이션 호스팅)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="16"
                checked={selectedOptions["목적 및 용도_16"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="중간 (예: 중간 수준의 리소스를 요구하는 애플리케이션 호스팅)"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="17"
                checked={selectedOptions["목적 및 용도_17"][0] === 1}
                onChange={handleCheckboxChange}
              />
            }
            label="고급 (예: 고급 리소스를 요구하는 복잡한 애플리케이션 호스팅)"
          />
        </FormGroup>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            variant="contained"
            onClick={go_N_2}
            style={{ marginRight: "100px" }}
            // disabled={!selectedOption} // Disable button if no option selected
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
