const ToDoHeading = function () {
    return (
        <>
            <table className="bg-white w-2/4 shadow-md  text-center">

                <tbody className="text-gray-700 border-solid">
                    <tr className="border-solid ">
                        <td className="">Task</td>
                        <td className="py-2 px-4">Date</td>
                        <td className="py-2 px-4 m-5">Action</td>
                    </tr>
                </tbody>

            </table>
            {/* <div className="container text-center mb-3">
                <div className="row font-bold">
                    <div className="col-4">Task</div>
                    <div className="col-4">Date</div>
                    <div className="col-3">Action</div>
                </div>
            </div> */}
        </>
    )
}

export default ToDoHeading


