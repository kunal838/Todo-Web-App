import React from 'react'
import './TodoList.css'
import Checkbox from '@material-ui/core/Checkbox'
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/todoSlice'
import { motion } from "framer-motion"
const TodoItem = ({name , done , id}) => {
    const dispatch = useDispatch()
    const handleCheck = () =>{
        dispatch(setCheck(id))
    }
    return (
        <motion.div className='todolist'
        initial={{scale:0.2,
            opacity:0,
            x:-900
        }}
        animate={{
            scale:1,
            opacity:1,
            x:0

        }}
        >
            <Checkbox 
            checked={done}
            color='Primary'
            onChange={handleCheck}
            inputProps={{'aria-label':'secondary checkbox'}}
            />
            <h1 className={done && 'todoItem--done'}>
                {name}
            </h1>
        </motion.div>
    )
}

export default TodoItem