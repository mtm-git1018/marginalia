import  { useLottie } from "lottie-react"
import BookLoader from '../../asset/BookLoader.json'
function LoadingSpinner() {

  const style = {
    height: 100,
    width:100
  }

  const option = {
    animationData: BookLoader,
    loop: true,
    autoplay:true
  }

  const { View } = useLottie(option, style)
  
  return (
    <span className="flex-center flex-col">
      {View}
      <p className="text-center">Loading...</p>
    </span>
  );
}
export default LoadingSpinner