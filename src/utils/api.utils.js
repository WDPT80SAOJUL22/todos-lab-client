import axios from 'axios'

class Api{
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5000/"
        })
    }

    //adicionar todo
    addTodo = async (title) => {
        try {
            const { data } = await this.api.post('/todos', {title})
            return data
        } catch (error) {
            console.log(error, `Could not add a new Todo`)
        }
    }


    //get all Todos
    getTodos = async () => {
        try {
            const { data } = await this.api.get('/todos')
            return data            
        } catch (error) {
            console.log(error, `Could not load the Todos`)
        }
    }

    //update de um Todo especifico
    updateTodo = async (id, todo) => {
        try {
            await this.api.put(`/todos/${id}`, todo)
        } catch (error) {
            console.log(error, `Could not update this Todo`)
        }
    }

    //delete um Todo especifico
    deleteTodo = async (id, todo) => {
        try {
            await this.api.delete(`/todos/${id}`, todo)
        } catch (error) {
            console.log(error, `Could not delete this Todo`)
        }
    }




}


export default new Api();