import React,{useEffect, useState} from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {

    const [todos, setTodos] = useState([])
    useEffect(() => {axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
}, [])

  return (
    <div>
        To Do List
        <Create/>
        {
            todos.length === 0 ? <div>No todos</div> :
            todos.map((todo) => (
                <div>
                    {todo.task}
                </div>
            ))
        }
    </div>
  )
}

export default Home
