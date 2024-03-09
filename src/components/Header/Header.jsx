import book from './../../images/book.png'
import darkBook from './../../images/darkBook.png'
const Header = () => {
  return (
    <div className=" min-h-screen flex md:items-center p-6 md:p-8 lg:px-16 lg:py-8">
        <div className="flex flex-col  md:flex-row justify-center md:justify-between w-full md:items-center">
          <div className='w-full h-[50px] md:hidden '/>
            <div className="flex flex-col gap-6 md:gap-8 ">
                <button className=" font-normal text-xs md:text-sm  border border-violet text-violet shadow md:w-36 w-w-116 rounded-sm  h-10 ">Author of august</button>
                <h1 className="max-w-max  md:text-5xl font-bold text-font-28  ">Eric-Emanuel Schmitt</h1>
                <p className="font-normal text-sm md:text-base max-w-550 ">
                Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.
                </p>
                <button className="bg-primary text-white  hover:border hover:border-primary dark:hover:bg-black hover:bg-white hover:text-primary rounded-sm  font-normal text-xs md:text-sm  h-11 w-w-150 md:w-w-185   self-start shadow ">View his books</button>
            </div>
            <div>
                <img src={book} alt="book" className="hidden md:block md:w-80 md:m-0 lg:w-full "/>
                <img src={darkBook} alt="book" className='block mx-auto md:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Header