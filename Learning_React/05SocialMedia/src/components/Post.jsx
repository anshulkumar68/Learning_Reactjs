import React from 'react'

const Post = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
                {/* {image && <img className="w-full" src={image} alt="Card image" />} */}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">title</div>
                    <p className="text-gray-700 text-base">content</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#example</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tags</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
            </div>
        </>
    )
}

export default Post