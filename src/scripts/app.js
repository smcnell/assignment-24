import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';




const ToDoView=React.createClass({
  getInitialState: function(){
  return {
    theList: ['wash cat', 'read book', 'rethink my life', 'go swimming']
  }
},
_handleNewListItem: function(){
  let newListItem=this.refs.inputNewList.value
  console.log(this.refs.inputNewList.value)

this._updateTheList(newListItem)
},

_updateTheList: function(newThing){
  console.log(newThing, 'workin')
  let listArrayCopy = this.state.theList.map(function(copy){return copy})
  listArrayCopy.push(newThing)
  console.log(listArrayCopy)
  this.setState({
    theList: listArrayCopy
  })
},
_handleRemoveItem: function(index){
  console.log('item to remove', index)




},



  render: function(){
    console.log(this.state.theList)


    // <ToDoItem itemName={this.state.theList} index={i} handleRemove={this._handleRemoveItem}/>

    return (
    <div className="big-container">
      <div className="header">
        <h1> TO DO LIST </h1>
        <input ref="inputNewList" type="text" name="search" placeholder=""/>
        <button type="button" onClick={this._handleNewListItem}>+ </button>
        <hr/>
      </div>

      <ul className="list-items">
        <li><input type="checkbox" name="hey" value="list"></input>wash cat<button type="button">X</button></li>
        <li><input type="checkbox" name="hey" value="list"></input>read book<button type="button">X</button></li>
        <li><input type="checkbox" name="hey" value="list"></input>rethink my life<button type="button">X</button></li>
        <li><input type="checkbox" name="hey" value="list"></input>go swimming<button type="button">X</button></li>

        <InputComponent updateListCb={this._updateTheList} />
      </ul>

    </div>
    )
  }



})

const InputComponent=React.createClass({


render: function(){
  return (
    <li><input type="checkbox" name="hey" value="list"></input>{this.newListItem}<button type="button">X</button></li>

  )
}

})



ReactDOM.render(<ToDoView/>, document.querySelector('#app-container'))
