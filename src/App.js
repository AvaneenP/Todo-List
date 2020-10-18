import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

  function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (value) => {
    setTodoList([...todoList, value]);
    console.log(todoList);
  };

  const deleteTodo = (value) => {
    
    let newArray = [];
    
    todoList.forEach((i) => {
      if (i !== value) newArray.push(i);
    });

    setTodoList(newArray);
    console.log(todoList);
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>To-do List App</h1>
      
      <InputField addTodo = {addTodo}/>
        
        {todoList.map(todo => 
          <Todo 
            title = {todo.title}
            description = {todo.description}
            date = {todo.date}
          />
        )}
​
    </div>
  );
}

export default App;


function Todo({ title, description, date }) {
  const [cross, setCross] = useState(false);

  return (
    <div style={{ backgroundColor: "whitesmoke",
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      width: "500px",
      marginLeft: "auto",
      marginRight: "auto",
      border: "3px solid black",
      marginTop: "30px",
      textDecoration: cross ? "line-through" : "none"
       }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
        
        <Button style={{marginTop:"auto"}}
        onClick={ () => setCross(!cross) } 
        variant="contained"
        size="medium"
        color="primary"
        >Complete!</Button>

        <Button style={{marginTop:"15px"}}
        variant="contained"
        size="medium"
        color="primary">Delete</Button>
        
    </div>
  );
}

function InputField({ addTodo }) {

  const [value, setValue] = useState({ title: "", description: "", date: "" });
  
  const inputStyle = {
  display: "flex", 
  flexDirection: "column",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div style = { inputStyle }>
      <input 
        style={{ borderWidth: '0', backgroundColor: 'whitesmoke' }} 
        placeholder='Enter title'
        value = { value.title }
        onChange = {e => handleChange(e)}
        id='title'
        >
      </input>
      <textarea 
        style={{ borderWidth: '0', backgroundColor: 'whitesmoke' }}
        placeholder='Enter description'
        value = { value.description }
        onChange = {e => handleChange(e)}
        id='description'
        >
      </textarea>
      <input 
        style={{ borderWidth: '0', backgroundColor: 'whitesmoke' }} 
        type='date' 
        placeholder='Enter date'
        value = { value.date }
        onChange = {e => handleChange(e)}
        id='date'
        >
      </input>

      <Button 
      style={{marginTop: "20px"}}
      onClick={() => addTodo(value)}
      variant="contained"
        size="large"
        color="primary">Add Item</Button>

    </div>
  );
}