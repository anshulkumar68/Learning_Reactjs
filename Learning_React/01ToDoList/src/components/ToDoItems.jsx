import ToDoItem from "./ToDoItem";

const ToDoItems = ({todoItems}) => {
    return(
        <>
        {todoItems.map((item) => (<ToDoItem  todoName={item.taskName} todoDate={item.dueDate}></ToDoItem>))};
        </>
    );
};
export default ToDoItems;