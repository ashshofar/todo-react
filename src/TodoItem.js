import React, { Component } from 'react'


class TodoItem extends Component {
    createTasks = item => {
        return <li key={item.key}>
                    <input
                        type="checkbox"
                        checked= {item.checked}
                        onChange= { () => this.props.changeItem(item.checked, item.key) } 
                    />
                    { item.edit ? (
                        <input
                            value = {item.text} 
                            name = "tempData"
                            onChange = { (e) => this.props.updateItem({key: item.key, text: e.target.value}) }
                            onBlur = { (e) => this.props.updateItem({key: item.key, edit: false}) }
                        />
                    ) : (
                        <span onDoubleClick = { () => this.props.editItem(item.key)} >{item.text}</span>
                    )
                    }
                    <button onClick = { () => this.props.deleteItem(item.key) }>Delete</button> 
                </li>
    }
    render() {
        const todoEntries = this.props.entries

        if(todoEntries) {
            const listItems = todoEntries.map(this.createTasks)
    
            return <ul className="theList">{listItems}</ul>
        }
        
        return <ul className="theList"> Kosong </ul>
    }
}

export default TodoItem