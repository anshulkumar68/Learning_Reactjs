import React, { useEffect, useState } from 'react'

const Bar = ({ value }) => {
    const [percent, setPercent] = useState(value);
    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));
    }, [value])

    return (
        <>
            < div className="w-[400px] h-[23px] bg-gray-200 rounded-full border-[1px] border-black " >
                <span
                    className="block h-full bg-[#0cc951] rounded-full "
                    style={{ width: `${percent}%` }}
                ></span>
                
                <p className='flex justify-center py-[1rem]'>button</p>
            </div >
        </>
    )
}

export default Bar


