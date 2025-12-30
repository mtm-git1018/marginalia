import { cva } from "class-variance-authority"
import { tw } from "../../utill/tw"


interface Props{
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'submit' | 'button'
  className?:string
}



function Button({children,variant='primary',type='button',className,onClick}: Props) {
  
  const buttonVariants = cva('h-12 px-6 rounded-sm font-semibold w-full duration-200 ', {
    variants: {
      variant: {
        primary: 'bg-warmBrown text-white hover:bg-deepBrown',
        secondary: 'border border-softTan hover:bg-lightSand',
      },
    },
  });

  return (
    <button className={tw(buttonVariants({ variant }), className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
export default Button