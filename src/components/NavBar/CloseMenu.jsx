import closemenu from './../../images/cross.svg';

const toggleMenuClose=()=>{
    let navMenu = document.getElementById('responsiveMenu');
    navMenu.classList.remove('right-0');
    navMenu.classList.add('-right-full');
}

const CloseMenu = () => {
  return (
    <button className='block pt-8  px-5    md:hidden ' onClick={toggleMenuClose}>
        <img src={closemenu} alt="close" />
    </button>
  )
}

export default CloseMenu