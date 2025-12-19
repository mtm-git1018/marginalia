import { cva } from "class-variance-authority"
import { tw } from "../../utill/tw"


interface Props{
  children: React.ReactNode
  amount: 'one' | 'two'
  onClick?: () => void
  type?: 'submit' | 'button'
}



function Button({children,amount,type='button',onClick}: Props) {
  
  const buttonVariants = cva(
    'h-12 px-6 rounded-sm bg-warmBrown text-white font-semibold w-full duration-200 hover:bg-deepBrown', {
      variants: {
        amount: {
          one: 'w-full',
          two:'w-1/2'
        }
      }
    }
  )

  return (
    <button
      className={tw(buttonVariants({ amount }))}
      onClick={onClick}
      type={type}
    >{children}</button>
  )
}
export default Button