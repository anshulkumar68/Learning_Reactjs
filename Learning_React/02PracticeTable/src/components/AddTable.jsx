const AddTable = () => {
    return (
        <>
            <table className="bg-white min-w-fit shadow-md rounded">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th className="py-2 px-4">Task</th>
                        <th className="py-2 px-4">Date</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    <tr>
                        <td className="py-2 px-4"><input type="text" placeholder="Enter Task" /></td>
                        <td className="py-2 px-4"><input type="date" ></input></td>
                        <td className="py-2 px-4"><button className="bg-white">Add</button></td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">Workout</td>
                        <td className="py-2 px-4">30-05-2024</td>
                        <td className="py-2 px-4"><button>Delete</button></td>
                    </tr>
                </tbody>

            </table>

            <table class="min-w-fit bg-white shadow-md rounded">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="py-2 px-4">Name</th>
                        <th class="py-2 px-4">Age</th>
                        <th class="py-2 px-4">Email</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700">
                    <tr>
                        <td class="py-2 px-4">John Doe</td>
                        <td class="py-2 px-4">30</td>
                        <td class="py-2 px-4">john@example.com</td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4">Jane Smith</td>
                        <td class="py-2 px-4">25</td>
                        <td class="py-2 px-4">jane@example.com</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default AddTable