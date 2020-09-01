import React from 'react'

export default function TodoItem(props) {
    return(
        <li className = "todo-item">
            <h2>{props.todo.title}</h2>
            <h3>{props.todo.content}</h3>
        </li>
    )
}