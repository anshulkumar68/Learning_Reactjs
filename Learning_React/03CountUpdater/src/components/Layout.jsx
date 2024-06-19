import React from 'react'

const Layout = () => {
    return (

        <div className='max-w-[400px] border-[1px] h-[250px] rounded-lg shadow-md mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-xl mt-2'>Counter</h1>
                <div className='mt-5'>Current counter value : </div>
            </div>
            <div className='flex justify-center items-center '>
                <button className='m-2 p-1 px-2 rounded-full bg-green-600'>Increase</button>
                <button className='m-2 p-1 px-2 rounded-full bg-red-600'>Decrease</button>
            </div>

        </div>
    )
}

export default Layout
