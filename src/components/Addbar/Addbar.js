import React, { useState } from 'react'

import apiTodos from '../../utils/api.utils.js'

import '../Addbar/Addbar.css'

export const Addbar = ({getMyAllTodos}) => {
    const [title, setTitle] = useState('')

    const handleChangeInput = (e) => {
        setTitle(e.currentTarget.value)
    }

    const handleAddTodo = async () => {
        try {
            await apiTodos.addTodo(title)
            setTitle('')
            await getMyAllTodos()
        } catch (error) {
            console.log(error, `Could not add a new Todo`)
        }
    }    

  return (
    <div className='form'>
        <input 
            type="text" 
            placeholder='Digite o Todo...' 
            value={title}
            onChange={handleChangeInput} />
        <button type='submit' onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}
