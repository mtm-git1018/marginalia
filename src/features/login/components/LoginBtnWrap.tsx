import { SOCIALS } from "../constant/social";
import SocialLoginBtn from "./SocialLoginBtn";

function LoginBtnWrap() {
  return (
    <ul className="flex flex-col gap-6">
      {SOCIALS.map(({ id, title, src, color, onClick }) => (
        <li key={id} className="flex-center font-semibold">
          <SocialLoginBtn title={title} src={src} color={color} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
export default LoginBtnWrap