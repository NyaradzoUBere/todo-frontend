import React from 'react'


const initialState = {
    title: "",
    content: "",
    urgent: false,
    done: false
}
export default class TodoForm extends React.Component{

    state = initialState

    handleChange = (event) => {
        let {name, value, checked} = event.target

        value = (name == "urgent") ? checked : value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.componentDidMount() {

        // 
        this.props.addTodo(this.state)
    }
    render() {
        return(
            <form className = "todo-form" onSubmit = {this.handlesubmit}>
                <h2>Create a New Todo</h2>
                <label>Title</label>
                <input type= "text" name = "title" value = {this.state.title} onChange= {this.handleChange}/>
                <label>Content</label>
                <input type= "text" name = "content" value = {this.state.value} onChange= {this.handleChange}/>
                <div className= 'urgent-input'>
                <label>Urgent</label>
                <input type= "checkbox" name="urgent" checked = {this.state.urgent} onChange = {this.handleChange}/>
                </div>
                <input type= "submit" />
            </form>
        )
        
    }
}