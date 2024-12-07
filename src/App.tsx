import {MouseEvent, useState} from "react";
function App() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    const [selectedIndex, setSelectedIndex] = useState()
    items = [];
    const  handleClick=(event: MouseEvent)=>{
        console.log(event);
    }
    const getMessage = () => {
        return items.length === 0 ? <p>No Item Found</p> : null;
    }
    return <>
        <h1>List</h1>
        {getMessage()}
        {items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item , index) => (
                <li className={setSelectedIndex(index)  ? "list-group-item active" :"list-group-item"}
                    key={item} onClick={handleClick}>
                    {item}
                </li>
            ))}
        </ul>
    </>
}

export default App