import { tw } from "../../../shared/utill/tw"

interface Props {
  title: string,
  src: string
  color: string
  onClick?:()=> Promise<void>
}


function SocialLoginBtn({ title, src,color,onClick }: Props) {
  return (
    <button className={tw(`flex-center gap-5 w-full h-12 rounded-sm`, color)}
      onClick={onClick}
    >
      <img src={src} alt={title} className="w-10 h-10"/>
      <p>{title}로 로그인</p>
    </button>
  )
}
export default SocialLoginBtn