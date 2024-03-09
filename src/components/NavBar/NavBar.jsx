import logoLight from './../../images/Logo-Light.svg'
import logoDark from './../../images/Logo-Dark.svg'
import NavBarDarkMode from './NavBarDarkMode'
import NavBarItems from './NavBarItems'
import NavBarMenu from './NavBarMenu'
import { useTheme } from './../Theme';

const NavBar = () => {
  const {darkMode}=useTheme();
  return (
    <div className="flex w-screen justify-between items-center fixed text-center bg-white dark:bg-black p-6 md:p-8 lg:px-16 lg:py-8 ">
      <img src={darkMode? logoDark : logoLight  } alt="logo" className='w-20 md:w-auto'/>
      <NavBarItems />
      <NavBarDarkMode />
      <NavBarMenu/>
    </div>
  )
}

export default NavBar