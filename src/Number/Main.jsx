import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Number.css";
export default function N_1() {
  const movePage = useNavigate();

  function go_N_1() {
    movePage("/N_1");
  }
  return (
    <div className="main_m">
      <h1 style={{ fontSize: "80px" }}>IT 인프라 필요 조사 양식</h1>
      <p>
        <Button
          variant="contained"
          onClick={go_N_1}
          style={{ width: "200px", height: "150px", fontSize: "30px" }}
        >
          시작하기
        </Button>
      </p>
    </div>
  );
}
