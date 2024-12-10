import {useState} from "react";
// import styles from "./ListGroup.module.css"
import styled  from "styled-components";
const List = styled.ul`
    list-style: none;
    padding: 0;
    background: green;
`

const ListItem = styled.li`
    padding: 5px 0px;
`
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
        <List style={{backgroundColor: "aqua"}}>
            {items.map((item , index) => (
                <ListItem className={selectedIndex==index  ? "list-group-item active" :"list-group-item"}
                    key={item} onClick={()=>{
                        setSelectedIndex(index)
                        onSelectItem(item)
                    }}>
                    {item}
                </ListItem>
            ))}
        </List>
    </>

}
export default ListGroup