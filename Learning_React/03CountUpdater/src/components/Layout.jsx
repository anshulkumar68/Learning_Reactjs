import React from 'react'
import Display from './Display'
import { useDispatch } from 'react-redux'

const Layout = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({type: "INCREMENT"});
    }

    const handleDecrement = () => {
        dispatch({type : "DECREMENT"});
    }

    return (
        <div className='max-w-[400px] border-[1px] h-[250px] rounded-lg shadow-lg  mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-xl mt-2'>Counter</h1>
                <Display/>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button onClick={handleIncrement} className='m-2 p-2 px-2 rounded-full bg-green-600'>Increase</button>
                <button onClick={handleDecrement} className='m-2 p-2 px-2 rounded-full bg-red-600'>Decrease</button>
            </div>

            <div className="flex justify-center mt-2">
                <input type="text" placeholder='Enter Number' className='shadow-md max-w-[130px] p-3 border-none outline-none'/>
                <button className='m-2 p-1 px-5 rounded-full bg-green-600'>+</button>
                <button className='m-2 p-1 px-5 rounded-full bg-red-600'>-</button>
            </div>
        </div>
    )
}

export default Layout
