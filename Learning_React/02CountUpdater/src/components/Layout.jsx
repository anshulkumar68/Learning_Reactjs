import React, { useRef } from 'react'
import Display from './Display'
import { useDispatch, useSelector } from 'react-redux'
import PrivacyMessage from './PrivacyMessage';

const Layout = () => {
    const privacy = useSelector((store) => store.privacy);
    const inputELement = useRef();
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({type: "INCREMENT"});
    }

    const handleDecrement = () => {
        dispatch({type : "DECREMENT"});
    }

    const handleAdd = () => {
        dispatch({type: "ADD",
            payload: {
                num : inputELement.current.value
            }
        });
    }

    const handleSubtract = () => {
        dispatch({
            type: "SUBTRACT",
            payload: {
                num: inputELement.current.value
            }
        })
    }

    const handleToggle = () => {
        dispatch({
            type : "TOGGLE",
        })
    }

    return (
        <div className='max-w-[400px] border-[1px] h-[250px] rounded-lg shadow-lg  mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-xl mt-2'>Counter</h1>
                {privacy ? <PrivacyMessage /> : <Display/>}
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button onClick={handleIncrement} className='m-2 px-4 py-1 rounded-full bg-green-600'>Increase</button>
                <button onClick={handleDecrement} className='m-2 px-4 py-1 rounded-full bg-red-600'>Decrease</button>
                <button onClick={handleToggle} className='m-2 px-4 py-1 rounded-full bg-orange-500'>Privacy Toggle</button>
            </div>

            <div className="flex justify-center mt-2">
                <input ref={inputELement} type="text" placeholder='Enter Number' className='shadow-md max-w-[130px] p-3 border-none outline-none'/>
                <button onClick={handleAdd} className='m-2 p-1 px-5 rounded-full bg-green-600'>+</button>
                <button onClick={handleSubtract} className='m-2 p-1 px-5 rounded-full bg-red-600'>-</button>
            </div>
        </div>
    )
}

export default Layout
