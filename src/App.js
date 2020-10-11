import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function App() {

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [dueDate, setDueDate] = useState("");
const [showItem, setResult] = useState(false);
const [items, setItems] = useState([]);

  return (
    <div style={{textAlign: "center"}}>
    <input style={{display: "flex", 
  flexDirection: "column",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid red"}}
     type="text" onChange={(event) => setName(event.target.value)} />
    
    <input style={{display: "flex", 
  flexDirection: "column",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid blue",
  marginTop: "20px"}}
     type="text"  onChange={(event) => setDescription(event.target.value)} />
    
    <input style={{display: "flex", 
  flexDirection: "column",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid green",
  marginTop: "20px"}}
    type="text"  onChange={(event) => setDueDate(event.target.value)} />

<Button style={{marginTop:"15px", 
display: "flex", 
flexDirection: "column", 
marginLeft: "auto", 
marginRight: "auto"}}
onClick={() => setResult(true) }
variant="contained"
size="large"
color="primary">
    Add Item!</Button>

    { (name && description && dueDate) && showItem && <ToDoCard
    todoItem = {name}
    description = {description}
    dueDate = {dueDate}/> }
    </div>
  )

}


const ToDoCard = ( {todoItem, description, dueDate} ) => {

  const [cross, setCross] = useState(false);
  const [deleteItem, setStatus] = useState(true);

  return deleteItem && <div style={{ background: "#899ea3",
  display: "flex", 
  flexDirection: "column",
  alignItems: "center",
  width: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "3px solid black",
  marginTop: "30px",
  textDecoration: cross ? "line-through" : "none"
 }} >
    <h3>{todoItem}</h3>
    <p>{description}</p>
    <h4>{dueDate}</h4>
    <button onClick={ () => setCross(!cross) } >Complete!</button>

    <button style={{marginTop:"15px", 
    display: "flex", 
    flexDirection: "column",
    marginLeft: "auto", 
    marginRight: "auto"}}
    onClick={() => setStatus(false)}>
    Delete Item!</button>

  </div>
}
export default App;