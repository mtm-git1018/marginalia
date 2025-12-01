import { cva } from "class-variance-authority"
import { tw } from "../utill/tw"

interface Props{
  message: string
  type: 'one' | 'two'
}



function Button({ message,type }: Props) {
  
  const buttonVariants = cva(
    'h-12 px-6 rounded-sm bg-text text-white font-semibold w-full', {
      variants: {
        type: {
          one: 'w-full',
          two:'w-1/2'
        }
      }
    }
  )

  return (
    <button className={tw(buttonVariants({type}))}>{message}</button>
  )
}
export default Button