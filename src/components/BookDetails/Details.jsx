import React from 'react'
import CounterButtons from './counterButtons'

const Details = (props) => {
  return (
    <div className='min-h-[100vh]  flex flex-col items-center md:items-start md:flex-row justify-center gap-7 md:gap-14 px-6 py-14 md:px-8 md:py-24 lg:px-16'>
        <img src={props.image} alt={props.title} className='w-64 mt-9 md:mt-0 md:w-[29%] ' />
        <div className='w-[80vw] flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold text-font-28 md:text-[40px]'>{props.title}</h1>
                <p className='font-normal text-xs'>{props.authors}</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='text-lg font-bold'>About Book</h2>
                <p className='text-sm font-normal'>{props.description}</p>
            </div>
            <CounterButtons/>
            <div className='flex items-center md:flex-row gap-3'>
            <button className='h-8 md:h-10 w-1/2 text-white bg-primary'>Add to cart</button>
            <button className='h-8 md:h-10 w-1/2 text-primary  border border-primary'>Favorite</button>
            </div>
            <div className='flex flex-col ont-normal text-base border-t gap-3 border-primary pt-6'>
                <p> <span className='text-primary'>Pages Number:</span> {props.pages} pages</p>
                <p> <span className='text-primary'>Rating Count:</span> {props.ratingCount}</p>
                <p> <span className='text-primary'>Reviews:</span> {props.reviewCount}</p>
            </div>
        </div>
    </div>
  )
}

export default Details