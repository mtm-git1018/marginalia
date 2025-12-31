import { useNavigate } from "react-router";
import Button from "../../../shared/components/button/Button";

function ShortCutButtons() {
  const navigate = useNavigate()
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          navigate('study');
        }}
    
      >
        서재로 이동하기
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          navigate(`addBook`);
        }}
      
      >
        책 추가하기
      </Button>
    </>
  );
}
export default ShortCutButtons