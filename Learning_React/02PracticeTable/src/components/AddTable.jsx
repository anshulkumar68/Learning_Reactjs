

const AddTable = () => {
    return (
        <>
        <div className="flex justify-center">
            <table className="bg-white w-2/4 shadow-md rounded text-center">
                <thead class="bg-gray-800 text-white ">
                    <tr>
                        <th className="py-2" colspan="3">TO DO APP</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 border-solid">
                    <tr className="border-solid ">
                        <td className=""><input className="enter-task pl-4 py-2" type="text" placeholder="Enter Task" /> </td>
                        <td className="py-2 px-4"><input className="pr-8 py-2" type="date" /></td>
                        <td className="py-2 px-4 m-5"><button className="w-50 bg-green-700 px-4 py-2 rounded-lg text-white font-thin text-sm">Add</button></td>
                    </tr>
                    <tr className="text-">
                        <td className="py-2 px-4">Workout</td>
                        <td className="py-2 px-4">30-05-2024</td>
                        <td className="py-2 px-4"><button className="bg-red-600 px-4 py-2 rounded-lg text-white font-thin text-sm">Delete</button></td>
                    </tr>
                </tbody>

            </table>
            </div>
        </>
    )
}

export default AddTable

{/* <input className="border-none max-width-fit" type="text" placeholder="Enter Task" /> */}