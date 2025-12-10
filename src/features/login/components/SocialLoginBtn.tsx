import { tw } from "../../../shared/utill/tw"

interface Props {
  title: string,
  src: string
  color:string
}


function SocialLoginBtn({ title, src,color }: Props) {
  return (
    <button className={tw(`flex-center gap-5 w-full h-12 rounded-sm`,color)}>
      <img src={src} alt={title} className="w-10 h-10"/>
      <p>{title}로 로그인</p>
    </button>
  )
}
export default SocialLoginBtn