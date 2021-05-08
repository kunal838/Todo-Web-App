import React from 'react';
import {useDispatch} from 'react-redux'

import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux'
import {selectTodoList} from './features/todoSlice'
import {setCheck} from './features/todoSlice'

function App() {
  const todolist = useSelector(selectTodoList)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <div className='app__container'>
      <Input/>
        <div className='app__todoContainer'>
         {
           todolist.map((item)=><TodoList name={item.item} done={item.done} id={item.id}/>)
         }
        </div>
     
    </div>
    </div>
  );
}

export default App;
