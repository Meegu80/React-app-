import { useNavigate } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 16px;
  margin-bottom: 20px;
  border-radius: 12px;

  background-color: #1a1a1a;
  color: #ffffff;
  border: 1px solid #333;
  font-size: 15px;

  // 마우스가 올라갔을 때 커서의 모양을 변경하는 CSS
  cursor: pointer;
`;

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(-1);
      }}
    >
      &larr; Go Back
    </Button>
  );
}

export default BackButton;
