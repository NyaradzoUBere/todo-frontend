import React from 'react'


const initialState = {
    title: "",
    content: "",
    urgent: false,
    done: false
}
export default class TodoForm extends React.Component{

    state = initialState
    render() {
        return(
            <form className = "todo-form">
                <h2>Create a New Todo</h2>
                <label>Title</label>
                <input type= "text" name = "title" />
                <label>Content</label>
                <input type= "text" name = "content" />
                <div className= 'urgent-input'>
                <label>Urgent</label>
                <input type= "checkbox" name="urgent" />
                </div>
                <input type= "submit" />
            </form>
        )
        
    }
}