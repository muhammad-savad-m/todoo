import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todo",
    initialState:{
       todo:  [
  { id: 1, title: "Learn React hooks", completed: false },
  { id: 2, title: "Practice useEffect", completed: true },
  { id: 3, title: "Build a React project", completed: false },
]
    },
    reducers:{
        addtodo:(state,action)=>{
            if(action.payload.title!==""){
            state.todo.push(action.payload)
            }
        },
        deleteTodo:(state,action)=>{
            state.todo= state.todo.filter((a)=>a.id!==action.payload)
        },
       complete:(state,action)=>{
        state.todo.completed=action.payload
       }
    }
})
export const {addtodo,deleteTodo,complete}=todoSlice.actions
export default todoSlice.reducer