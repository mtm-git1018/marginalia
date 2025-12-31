import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";


interface Props{
  path?:string
}
function BackButton({path}:Props) {

  const navigate = useNavigate()
  const handleClick = () => {
    if (path) {
      navigate(path)
    } else {
      navigate(-1)
    }
  }

  return (
    <button type="button" onClick={handleClick} aria-label="뒤로가기">
      <FaArrowLeftLong  size={20}/>
    </button>
  );
}
export default BackButton