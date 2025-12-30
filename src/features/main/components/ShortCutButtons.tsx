import { useNavigate } from "react-router";
import Button from "../../../shared/components/button/Button";

function ShortCutButtons() {
  const navigate = useNavigate()
  return (
    <>
      <Button
        amount="one"
        onClick={() => {
          navigate('study');
        }}
      >
        서재로 이동하기
      </Button>
      <Button
        amount="one"
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