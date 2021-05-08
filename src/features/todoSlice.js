import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoLists:[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state,action)=>{
            state.todoLists.push(action.payload)
        },
        setCheck: (state,action) =>{
            state.todoLists.map(item=>{
                if (action.payload===item.id) {
                    if (item.done === true) {
                        item.done = false
                    }else{
                        item.done = true
                    }
                }
            })
        }
    }
});

export const {
    saveTodo,
    setCheck
} = todoSlice.actions
export const selectTodoList = state => state.todos.todoLists
export default todoSlice.reducer