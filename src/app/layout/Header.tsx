
import { RxHamburgerMenu } from 'react-icons/rx';
function Header() {
  return (
    <header className="h-14 w-full px-5 py-3 bg-border flex justify-between items-center"> <h1>LOGO</h1>
      <button type='button'>
        <RxHamburgerMenu size={24}  />
      </button>
    </header>
  )
}
export default Header