import styled from "styled-components";
import {useState} from "react";

const Contain = styled.div`
  display:flex;
  flex-direction: row;
  height:80vh;
  width:80vw;
  border:2px solid  black;
  justify-content:center;
  align-items:center;
  margin:auto;
  background-color:#FBF8F1;
`;
const ContainTop = styled.div`
  display:flex-box;
  flex-direction: column;
`;

const AddBtn = styled.button`
  background-color:#FF9F45;
  color:#ffff;
  border:inherit;
  border-radius:5px;
  padding:8px;
  margin-left:5px;
`;

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const input = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos(currentArray => [todo, ...currentArray]);
  };
  return (
    <Contain>
      <ContainTop>
        <h1>ToDo</h1>
        <hr/>
        <form style={{marginTop:"20px"}} onSubmit={onSubmit}>
          <input 
            onChange={input}
            value={todo}type="text"
            placeholder="Write"/>
            <AddBtn>Add</AddBtn>
      </form>
      <ul>
        {todos.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
      </ContainTop>
      
    </Contain>
  );
}

export default App;
