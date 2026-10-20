
import { useSelector,useDispatch } from "react-redux"
import { addtodo,deleteTodo,complete } from "./features/todoSlice"
import { useState } from "react"
function App() {
  //todo
  const todo= useSelector((state)=>state.todo.todo)
  const dispatch= useDispatch()
  //set todo
  const [text,setText]=useState("")


  return (
    <div>
       {todo.map((a)=>(
        <div key={a.id}>
            <p>{a.title}</p>
            <p>status:{a.completed?"completed":"pending"}</p>
           <button onClick={() => dispatch(complete(a.id))}>
  {a.completed ? "Undo" : "Finish"}
</button>
            <button onClick={()=>dispatch(deleteTodo(a.id))}>delete</button>
        </div>
       ))}
       <br />
       
          <input type="text" value={text}
          onChange={(e)=>setText(e.target.value)}/>
          <button onClick={()=>dispatch(addtodo({id:Date.now(),title:text,completed:false}))}>add todo</button>
    </div>
  )
}

export default App
