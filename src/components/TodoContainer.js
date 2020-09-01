import React from 'react'
import TodoItem from './TodoItem'

export default function TodoContainer (props) {

    const showTodos = () => {
        return props.todos.map(todo => {
            return <TodoItem todo = {todo} key = {todo.id} />
        })
    }

    return(
        <ul className = "todo-list">
            {showTodos()}
        </ul>
    )
}