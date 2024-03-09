import menuIcon from './../../images/menu.svg';

const toggleMenu=()=>{
    let navMenu = document.getElementById('responsiveMenu');
    navMenu.classList.add('right-0');
    navMenu.classList.remove('-right-full');
}

const OpenMenu = () => {
  return (
    <button className='menuIcon block md:hidden ' onClick={toggleMenu}>
        <img src={menuIcon} alt="menu" />
    </button>
  )
}

export default OpenMenu