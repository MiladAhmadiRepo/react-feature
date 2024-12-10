// import ListGroup from "./components/ListGroup.tsx";

import Alert from "./components/Alert.tsx";
import BaseButton from "./components/BaseButton.tsx";
import {useState} from "react";
import ListGroupCss from "./components/ListGroup";
import { BsArrowDownRightSquareFill } from "react-icons/bs";

import ListGroup from "./components/ListGroup/ListGroup.tsx";
import "./App.css"
function App() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    return < ><BsArrowDownRightSquareFill></BsArrowDownRightSquareFill> <h1>
            <ListGroup items={items} heading={"Cities"} onSelectItem={item => 1}></ListGroup>
        </h1></>
    //-------------------------------------- click button ---------------------------------------------------------------
    // const [alertVisible, setAlertVisible] = useState(false);
    // return <div>
    //     {alertVisible && <Alert children={"Holy guacamole!"} onClick={() => setAlertVisible(false)}></Alert>}
    //     <BaseButton color={"btn btn-primary"} onClick={() => setAlertVisible(true)}
    //                 children={"Click On Me"}></BaseButton>
    // </div>
}

export default App