import {useState} from "react";
import styles from "./ListGroup.module.css"
interface  ListGroupProps {
    items: string[];
    heading : string;
    onSelectItem : (item : string)=>void
}
function  ListGroup({items,heading,onSelectItem}: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    // items = [];
    // const  handleClick=(event: MouseEvent)=>{
    //     console.log(event);
    // }
    // const getMessage = () => {
    //     return items.length === 0 ? <p>No Item Found</p> : null;
    // }
    return <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No Item Found</p>}
        <ul className={[styles.listGroup,styles.container].join(' ')}>
            {items.map((item , index) => (
                <li className={selectedIndex==index  ? "list-group-item active" :"list-group-item"}
                    key={item} onClick={()=>{
                        setSelectedIndex(index)
                        onSelectItem(item)
                    }}>
                    {item}
                </li>
            ))}
        </ul>
    </>

}
export default ListGroup