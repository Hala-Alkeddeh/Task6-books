import dark from './../../images/moon.svg'
import light from './../../images/sun.svg'
import { useTheme } from '../Theme'


const NavBarDarkMode = () => {
    const {darkMode , toggleDarkMode}=useTheme();
  return (
    <div>
        <div className='hidden md:flex items-center gap-2'>
            <button  onClick={toggleDarkMode}> { darkMode ? <img src={light}/> :<img src={dark} />} </button>
            <p className='font-normal'>{ darkMode ? 'Light mode' :'Dark mode'}</p>
        </div>
    </div>
  )
}

export default NavBarDarkMode