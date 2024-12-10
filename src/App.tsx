// import ListGroup from "./components/ListGroup.tsx";

import Alert from "./components/Alert.tsx";
import BaseButton from "./components/BaseButton/BaseButton.tsx";
import {useState} from "react";
import ListGroupCss from "./components/ListGroup";
import {BsArrowDownRightSquareFill} from "react-icons/bs";

import ListGroup from "./components/ListGroup/ListGroup.tsx";
import Like from "./components/LikeButton/Like.tsx";

function App() {
    // const items = [
    //     'New York',
    //     'San Francisco',
    //     'Tokyo',
    //     'London',
    //     'Paris'
    // ];
    // return < ><BsArrowDownRightSquareFill></BsArrowDownRightSquareFill> <h1>
    //         <ListGroup items={items} heading={"Cities"} onSelectItem={item => 1}></ListGroup>
    //     </h1>
    //     <BaseButton onClick={()=>console.log('click on button')} color={'primary'}>Click on Me</BaseButton>;
    // </>
    //-------------------------------------- click button ---------------------------------------------------------------
    // const [alertVisible, setAlertVisible] = useState(false);
    // return <div>
    //     {alertVisible && <Alert children={"Holy guacamole!"} onClick={() => setAlertVisible(false)}></Alert>}
    //     <BaseButton color={"btn btn-primary"} onClick={() => setAlertVisible(true)}
    //                 children={"Click On Me"}></BaseButton>
    // </div>
    //-------------------------------------- heart button ---------------------------------------------------------------
    // return <div>
    //     <Like onClick={() => console.log('clicked')}></Like>
    // </div>
    //-------------------------------------- update nested objects  ---------------------------------------------------------------
    // const [customer, setCustomer] = useState({
    //     name : 'John',
    //     address: {
    //         city: 'San Francisco',
    //         zipcode: '12345',
    //     }
    // });
    // const handleClick=()=>{
    //     setCustomer({...customer,address: {...customer.address,zipcode: '8888'}})
    // }
    // //-------------------------------------- update array  ---------------------------------------------------------------
    // const [tags, setTags] = useState(['happy', 'cheerful']);
    // const handleClick = () => {
    //     //add
    //     setTags([...tags, 'exciting']);
    //     //remove
    //     setTags(tags.filter((tag) => tag !== 'cheerful'))
    //     //update
    //     setTags(tags.map((tag) => tag === 'happy' ? 'happiness' : tag));
    // }
    //-------------------------------------- update array objects ---------------------------------------------------------------
    const [bugs, setBugs] = useState([
        {id:1 , title:"bug 1",fixed : false},
        {id:2 , title:"bug 2",fixed : true},
    ]);
    const handleClick = () => {

        //update
        setBugs(bugs.map((bug) => bug.id === 1 ? {...bug,fixed: true}:bug));
    }
}

export default App