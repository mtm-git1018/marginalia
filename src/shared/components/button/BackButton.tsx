import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

function BackButton() {

  const navigate = useNavigate()

  return (
    <button type="button" onClick={()=>navigate(-1)} aria-label="뒤로가기">
      <FaArrowLeftLong  size={20}/>
    </button>
  );
}
export default BackButton