import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {
    return (
        <>
            {todoItems.map(item => <TodoItem todoName={item.itemName} todoDate={item.itemDate}></TodoItem>)}
        </>
    )
}

export default TodoItems