// import ListGroup from "./components/ListGroup.tsx";

import Alert from "./components/Alert.tsx";
import BaseButton from "./components/BaseButton.tsx";
import {useState} from "react";

function App() {
    // const items = [
    //     'New York',
    //     'San Francisco',
    //     'Tokyo',
    //     'London',
    //     'Paris'
    // ];
    // return <h1><ListGroup items={items} heading={"Cities"}></ListGroup></h1>;
    const [alertVisible, setAlertVisible] = useState(false);
    return <div>
        {alertVisible && <Alert children={"Holy guacamole!"} onClick={() => setAlertVisible(false)}></Alert>}
        <BaseButton color={"btn btn-primary"} onClick={() => setAlertVisible(true)}
                    children={"Click On Me"}></BaseButton>
    </div>
}

export default App