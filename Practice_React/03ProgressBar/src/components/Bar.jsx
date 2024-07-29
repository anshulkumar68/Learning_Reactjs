import React, { useEffect, useState } from 'react'

const Bar = ({ value}) => {
    const [percent, setPercent] = useState(value);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));

        if(value>=100)
            onComplete();
    }, [value])


    const onComplete = ()=> {
        setSuccess(true);
    }

    return (
      <>
        <div className="w-[400px] h-[23px] bg-gray-200 rounded-full border-[1px] border-black ">
          <span
            className="block h-full bg-[#0cc951] rounded-full"
            style={{ width: `${percent}%` }}
          ></span>

          <p className="flex justify-center py-[1rem]">
            {success ? "Complete!" : "Loading..."} {percent}%
          </p>
        </div>
      </>
    );
}

export default Bar


