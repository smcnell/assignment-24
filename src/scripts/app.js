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
  let listCopy=this.state.theList;
  listCopy.push(newThing)
  this.setState({
    theList: listCopy
  })
},
_handleRemoveItem: function(evt){
  console.log(evt.target)
  console.log(evt.target.dataset.theindex)
let currentIndex=evt.target.dataset.theindex

  this.setState({
    theList: this.state.theList.filter(function(index){
      if(currentIndex===index){
        return false
      } else {
        return true
      }

    })

  })


},

  render: function(){
    console.log(this.state.theList)


    // <ToDoItem itemName={} index={i} handleRemove={this._handleRemoveItem}/>


    var itemsOnPage=[]
    for (let i=0; i<this.state.theList.length; i++){
      itemsOnPage.push((<InputComponent eachListText={this.state.theList[i]} index={i} handleRemove={this._handleRemoveItem}/>))
    }

    return (
    <div className="big-container">
      <div className="header">
        <h1> TO DO LIST </h1>
        <input ref="inputNewList" type="text" name="search" placeholder=""/>
        <button type="button" onClick={this._handleNewListItem}>+ </button>
        <hr/>
      </div>

      <ul className="list-items">

      {itemsOnPage}

      </ul>

    </div>
    )
  }



})

const InputComponent=React.createClass({


render: function(){
  return (
    <li><input type="checkbox" name="hey" value="list"></input>{this.props.eachListText}<button type="button" onClick={this.props.handleRemove} data-theindex={this.props.index}>X</button></li>

  )
}

})



ReactDOM.render(<ToDoView/>, document.querySelector('#app-container'))
