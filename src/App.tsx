// import ListGroup from "./components/ListGroup.tsx";

import Alert from "./components/Alert.tsx";
import BaseButton from "./components/BaseButton/BaseButton.tsx";
import {useState} from "react";
import ListGroupCss from "./components/ListGroup";
import {BsArrowDownRightSquareFill} from "react-icons/bs";

import ListGroup from "./components/ListGroup/ListGroup.tsx";
import Like from "./components/LikeButton/Like.tsx";
import {Immer, produce} from "immer";
import {NavBar} from "./components/CardItems/NavBar.tsx";
import {Card} from "./components/CardItems/Card.tsx";
import {ExpandableText} from "./components/ExpandableText/ExpandableText.tsx";
import {Form} from "./components/Form/Form.tsx";
import {ExpenseListForm} from "./components/Form/ExpenseListForm.tsx";
import ExpenseList from "./components/expense-tracker/components/ExpenseList.tsx";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm.tsx";
import {ProductList} from "./components/UseEffectTest/ProductList.tsx";
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
    // //-------------------------------------- update array objects ---------------------------------------------------------------
    // const [bugs, setBugs] = useState([
    //     {id:1 , title:"bug 1",fixed : false},
    //     {id:2 , title:"bug 2",fixed : true},
    // ]);
    // const handleClick = () => {
    //
    //     //update
    //     setBugs(bugs.map((bug) => bug.id === 1 ? {...bug,fixed: true}:bug));
    // }
    //-------------------------------------- update array objects with immer ---------------------------------------------------------------
    // const [bugs, setBugs] = useState([
    //     {id:1 , title:"bug 1",fixed : false},
    //     {id:2 , title:"bug 2",fixed : true},
    // ]);
    // const handleClick = () => {
    //     //update
    //     setBugs(produce(draft => {
    //         const bug=draft.find(bug=>bug.id===1)
    //         if(bug) bug.fixed=true;
    //     }))
    // }
    // return <div>
    //       {bugs.map(bug => <p key={bug.id} >{bug.title} {bug.fixed? 'Fixed' : 'New '}</p>)}
    //       <button onClick={handleClick}> Click Me</button>
    //  </div>
    //-------------------------------------- sharing state between components ---------------------------------------------------------------
    // const [cardItems, setCardItems] = useState(["Product1" ,"Product2"]);
    // return <>
    //     <NavBar cardItemsCount={cardItems.length}></NavBar>
    //     <Card cardItems={cardItems} onClear={() => setCardItems([])}></Card>
    //
    // </>
    //-------------------------------------- exercise  updating state ---------------------------------------------------------------
    // const [game, setGame] = useState({
    //     id: 1,
    //     player: {
    //         name: "John"
    //     },
    // })
    // const handleClick1 = () => {
    //     setGame({...game, player: {...game.player, name: 'Bob'}})
    // }
    // const [pizza, setPizza] = useState({
    //     name: 'Spicy Pepperoni',
    //     toppings: ['Mushroom']
    // })
    // const handleClick2 = () => {
    //     setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
    // }
    // const [cart, setCart] = useState({
    //     discount: 1,
    //     items: [
    //         {id: 1, title: 'product1', quantity: 1},
    //         {id: 2, title: 'product2', quantity: 1},
    //     ]
    // })
    // const handleClick3 = () => {
    //     setCart({
    //         ...cart,
    //         items: cart.items.map((item) => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)
    //     })
    // }
    //-------------------------------------- Expandable text ---------------------------------------------------------------
    // return <ExpandableText maxChars={100}  >
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    //     Things, scholars, and separate moons will always protect them.Cur racana mori?Captains reproduce from patterns like clear lieutenant commanders.
    // </ExpandableText>
    //-------------------------------------- expense-tracker ---------------------------------------------------------------
    //
    // const [expences, setExpences] = useState([
    //     {id: 1, description: 'buy a car', amount: 10, category: 'Utilities'},
    //     {id: 2, description: 'buy a car', amount: 10, category: 'Utilities'},
    //     {id: 3, description: 'buy a car', amount: 10, category: 'Utilities'},
    //     {id: 4, description: 'buy a car', amount: 10, category: 'Utilities'},
    // ])
    // const [selectedCategory, setSelectedCategory] = useState('')
    // const visibleExpences = selectedCategory ? expences.filter((item) => item.category === selectedCategory) : expences
    // return <>
    //     <ExpenseForm onSubmit={(newExpense)=> setExpences([...expences,{...newExpense,id:expences.length+1}])}></ExpenseForm>
    //     <div className="mb-3">
    //
    //         <ExpenseFilter onSelectCategory={(category)=>setSelectedCategory(category)}></ExpenseFilter>
    //     </div>
    //     <ExpenseList
    //         expences={visibleExpences} onDelete={(id) =>
    //         setExpences(expences.filter((item) => item.id !== id))
    //     }>
    //     </ExpenseList>
    // </>
    //-------------------------------------- use effect loop ---------------------------------------------------------------
    // return <>
    //     <div><ProductList></ProductList></div>
    // </>
    //-------------------------------------- use effect with change state to rerender ---------------------------------------------------------------
    const [category, setCategory] = useState("")
    return <>
        <div>
            <select className="form-select" onChange={(event)=>{
                setCategory(event.target.value)
            }}>
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
            </select>
            <ProductList category={category}></ProductList></div>
    </>
}

export default App