import { useState } from 'react';
import { Button, Container, Input, Div, Title } from './styles'

const App = () => {

  const [coment, setComent] = useState('')
  const [id, setId] = useState(0)
  const [todos, setTodos] = useState([''])
  const [verify, setVerify] = useState(true)

  if(verify == true){
    todos.shift()
    setVerify(false)
  }

  function capText (){
    if (coment.length >= 1){
      const todoObj = { text: coment, id: id }
      setTodos([...todos, todoObj.text])
      setComent('')
      setId(id + 1)
    }
  }

  return (
    <Container>
      <Title>To Do List</Title>
      <Input type='text' value={coment} onChange={(e) => setComent(e.target.value)} placeholder='Put your list here.'/>
      <Button value={coment} onClick={capText}>Add</Button>
      {todos.map((item) => (
        <Div>{item}</Div>
      ))
      }
    </Container>
  );
}

export default App;
