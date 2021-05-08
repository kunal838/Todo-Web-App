import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {saveTodo} from '../features/todoSlice'
import Button from '@material-ui/core/Button'
import { motion } from "framer-motion"
import './Input.css'
function Input() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo =()=>{
        setInput('')
        dispatch(saveTodo({
            item:input,
            done:false,
            id: Date.now()
        }))
    }
    return (
        
        <motion.div className='input'
        initial={{scale:0.2,
            opacity:0
        }}
        animate={{
            scale:1,
            opacity:1

        }}
        >
           <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
           {/*<Button variant="contained" color="secondary" onClick={addTodo}>Add</Button>*/}
           {input?<Button variant="contained" color="Primary" onClick={addTodo}>Add</Button>:<Button variant="outlined" color='secondary' disabled>
  Add
</Button>}
        </motion.div>
    )
}

export default Input
