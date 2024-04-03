import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function N_1() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resultData: estimate } = location.state || {};
  function go_Main() {
    navigate("/");
  }
  return (
    <div className="result_m">
      <h1 style={{ fontSize: "80px" }}>결과</h1>
      <p>{JSON.stringify(estimate[0])}</p>
      <p>{JSON.stringify(estimate[1])}</p>
      <p>{estimate[2].toString()}</p>
      <Button
        variant="contained"
        onClick={go_Main}
        style={{ width: "200px", height: "150px", fontSize: "30px" }}
      >
        다시하기
      </Button>
    </div>
  );
}
