import './index.css'
import TodoItem from '../TodoItem'
import { Component } from 'react'

const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]

  class simpleTodos extends Component {
    state = {todoList:initialTodosList}

    deleteTodo = id => {
      const {todoList} = this.state
      const filteredTodo = todoList.filter(each => each.id !== id)
      this.setState({todoList:filteredTodo})
    }

    render() {
        const {todoList} = this.state
        return (
            <div className='bg-container'>
                <div className='card-1'>
                    <h1 className='heading-1'>Delete Items</h1>
                    <ul className='todos-container'>
                        {todoList.map(eachTodo => (
                            <TodoItem 
                            todoItem = {eachTodo}
                            id = {eachTodo.id}
                            deleteTodo = {this.deleteTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
  }
  export default simpleTodos