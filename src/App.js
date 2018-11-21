import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import TodoItem from './TodoItem';

class App extends Component {

  componentDidMount() {
    let myData = sessionStorage.getItem('myData')


    if(myData !== '') {
      this.setState({
        items: JSON.parse(myData)
      })
    }
        
  }
  
  state = {
    name: "Test",
    items: [],
    currentItem: {text: '', key: '', 'checked': 0, 'edit': false},
    active: 0,
    total: 0
  }

  handleChange = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), checked: 0, 'edit': false}
    this.setState({
      currentItem,
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem

    if(newItem.text !== ''){
      const items = [...this.state.items, newItem]
      let tempTotal = this.state.total + 1;
      this.setState({
        items: items,
        total: tempTotal,
        currentItem: {text: '', key: '', checked: 0, 'edit': false}
      })

      sessionStorage.setItem('myData', JSON.stringify(items))
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {

      if(item.key === key) {
        if(item.checked === 1) {
          this.countActive(0)
        }
      }

      return item.key !== key
    })

    let tempTotal = this.state.total - 1

    this.setState({
      items: filteredItems,
      total: tempTotal
    })

    sessionStorage.setItem('myData', JSON.stringify(filteredItems))
  }

  changeItem = (value, key) => {
    const finalValue = value === 1 ? 0 : 1;

    this.countActive(finalValue)

    const updatedItems = this.state.items.filter(item => {
      if(item.key === key) {
        item.checked = finalValue
      }

      return item
    })

    this.setState({
      items: updatedItems,
    })

    sessionStorage.setItem('myData', JSON.stringify(updatedItems))

  }

  editItem = (key) => {
    const updatedItems = this.state.items.filter(item => {
      if(item.key === key) {
        item.edit = true
      }

      return item
    })

    this.setState({
      items: updatedItems,
    })
  }

  updateItem = (e) => {
    
    this.setState( (state) => ({
      items:state.items.map( (item) => item.key === e.key ? {...item, ...e} : item )
    }) )

    sessionStorage.setItem('myData', JSON.stringify(this.state.items))
  }

  countActive (value) {

    let tempActive = this.state.active

    if(value === 0) {
      tempActive -= 1 
    } else {
      tempActive += 1 
    }

    this.setState({
      active: tempActive
    }) 
  }

  render() {
    return (
      <div className="App">
        <div>
          Complete : {this.state.active}
        </div>
        <div>
          Active : {this.state.total}
        </div>
        <form onSubmit={this.addItem}>
          <input
            value = {this.state.currentItem.text} 
            onChange = {this.handleChange}
            name = "currentItem"
          />

          <input
            type = "submit"
            value = "Kirim"
          />

        </form>

        <TodoItem 
          entries={this.state.items}
          deleteItem={this.deleteItem}
          changeItem={this.changeItem}
          editItem={this.editItem}
          updateItem={this.updateItem}
        />

      </div>
    );
  }
}

export default hot(module)(App)
