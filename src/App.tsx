import ListGroup from "./components/ListGroup.tsx";
function App() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    return <h1><ListGroup items={items} heading={"Cities"}></ListGroup></h1>;

}

export default App