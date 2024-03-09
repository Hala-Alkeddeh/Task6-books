import {useState} from 'react'

const CounterButtons = () => {
    const [count , setCount]=useState(1);
    const Increase = () => {
        setCount(count + 1);
    }
    const Decrease = () => {
        if(count>=1){
            setCount(count - 1)
        }
    }
  return (
    <div className='flex items-center gap-2 text-base font-normal'>
        <button onClick={Decrease} className='w-6 h-6 rounded-full border border-black dark:border-white'>-</button>
        <p id='count'>{count}</p>
        <button onClick={Increase} className='w-6 h-6 rounded-full border border-black dark:border-white'>+</button>
    </div>  
  )
}

export default CounterButtons