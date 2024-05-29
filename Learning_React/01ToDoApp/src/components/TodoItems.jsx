import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {

    return (
        <>
            {todoItems.map(item => <TodoItem todoName={item.itemName} todoDate={item.itemDate} handleDelete = {()=> console.log(`${item.itemName} deleted`)}></TodoItem>)}
        </>
    )
}

export default TodoItems 