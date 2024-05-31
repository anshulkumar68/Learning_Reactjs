const Container = (props) => {
    return(
        // <div className=" bg-lime-50 max-w-90 w-2/4 border-solid border-2 border-black rounded-xl p-3">{props.children}</div>
        <div className="flex items-center flex-col rounded-lg">{props.children}</div>
    )
}

export default Container