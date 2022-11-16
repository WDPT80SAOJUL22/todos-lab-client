import React, { useEffect, useState } from 'react';
import apiTodos from '../../utils/api.utils.js';

import { Addbar } from '../Addbar/Addbar';

import '../TodoList/TodosList.css';

export const TodoList = ({completed, title, _id}) => {
    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState(completed);

    const handleChangeChecked = async (e) => {
        try {
            const itemTodo = {
                title,
                completed: e.currentTarget.checked
            }
            setChecked(e.currentTarget.checked)
            await apiTodos.updateTodo(itemTodo, _id)
            await getMyAllTodos()
        } catch (error) {
            console.error(error, `Error on check`);
        }
    }

    const deleteOneTodo = async (_id) => {
        try {
            await apiTodos.deleteTodo(_id)
            await getMyAllTodos()
        } catch (error) {
            console.error(error, `Error to delete this Todo`);
        }
    }

    const getMyAllTodos = async () => {
        try {
            const data = await apiTodos.getTodos();
            setTodos(data)
        } catch (error) {
            console.log(error, `Error to get my all Todos`)
        }
    }

    useEffect(() => {
        getMyAllTodos()
    }, [])


  return (
    <div>
        <h1>My Todos</h1>
        <Addbar getMyAllTodos={getMyAllTodos}/>
        {todos.map((todo) => {
            return (
                <div key={todo._id} className='todo-list'>
                    <div className='todo-list-item'>
                        <input type="checkbox" checked={checked} onChange={handleChangeChecked}/>
                        <span>{todo.title}</span>
                        <div className='btn-todo-list'>
                            <button onClick={() => deleteOneTodo()}>X</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
