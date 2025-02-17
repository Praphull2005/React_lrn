import ListItem from "./ListItem";
const Accordian = ({title, open, setOpen}) => {

    const showItemList = () =>{
        setOpen();
    }

    return (
       
        <div className="my-1 w-64 shadow-md px-2 py-2">
            <div className="flex justify-between ">
                <h1 className="font-bold">{title}</h1>
                <button onClick={showItemList}
                className="bg-black text-white px-2 rounded-md">Show</button>
            </div>
            {open && <ListItem/>}
        </div>
    )
}

export default Accordian;