
function App() {
    const items =[
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]
    return <>
        <ul className="list-group">
            {items.map(item=> (
                <li className="list-group-item" key={item}>{item}</li>
            ))}
        </ul>
    </>
}

export default App