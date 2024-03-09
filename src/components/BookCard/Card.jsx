import { Link } from 'react-router-dom'
import pages from './../../images/pages.svg'
import starRate from './../../images/starRate.svg'

const Card = (props) => {
  return (
    <div className=' w-56 md:w-[260px] lg:w-[280px] flex flex-col gap-[5px]' >
            <img src={props.image} alt={props.title} className='md:h-[400px]' />
            <div className='justify-center flex flex-col gap-3'>
                <h2 className='font-semibold text-base'>
                    {props.authors}
                </h2>
                <div className='font-medium text-sm flex justify-between items-center'>
                    <div className=' flex items-center gap-1 '>
                        <img src={pages} />
                        <p>{props.pagesNumber} Pages</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={starRate} />
                        <p>{props.rating}</p>
                    </div>
                </div>
            </div>
            <Link to={`/books/${props.idI}`} className='flex items-center justify-center h-10 mt-1 bg-primary text-white rounded-sm w-full font-medium text-sm hover:border hover:border-primary dark:hover:bg-black hover:bg-white hover:text-primary'>
                Show Details
            </Link>
    </div>
  )
}

export default Card