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
_handleRemoveItem: function(indexOfItem){
  this.setState({
    theList: this.state.theList.filter(function(item, i){
      if(i === indexOfItem){
        return false
      } else {
        return true
      }

    })

  })


},
_itemsOnPage: function(){
  let self = this

    return this.state.theList.map(function(obj, i){
      return <InputComponent eachListText={obj} index={i} handleRemove={self._handleRemoveItem} />
    })

},

  render: function(){

    // <InputComponent itemName={} index={i} handleRemove={this._handleRemoveItem}/>

    // var itemsOnPage=[]
    // for (let i=0; i<this.state.theList.length; i++){
    //   itemsOnPage.push((<InputComponent eachListText={this.state.theList[i]} index={i} handleRemove={this._handleRemoveItem}/>))
    // }
          // var itemsOnPage = function(){

          // }

    // let component= this
    // let itemsOnPage = []
    // let listy=this.state.theList.map(function(eachItem){
    //   return (
    //     itemsOnPage.push((<InputComponent eachListText={eachItem} index={i} handleRemove={this._handleRemoveItem}/>))
    //   )
    // })
    //
    //   })



    return (
    <div className="big-container">
      <div className="header">
        <h1> To Do List </h1>
        <input ref="inputNewList" type="text" name="search" placeholder=""/>
        <button type="button" onClick={this._handleNewListItem}>+ </button>
        <hr/>
      </div>

      <ul className="list-items">
        {this._itemsOnPage()}
      </ul>

    </div>
    )
  }



})

const InputComponent=React.createClass({

  _handleClick: function(){
    this.props.handleRemove(this.props.index)
  },

render: function(){
  return (
    <li><input type="checkbox" name="hey" value="list"></input>{this.props.eachListText}<button type="button" onClick={this._handleClick} data-theindex={this.props.index}>X</button></li>

  )
}

})



ReactDOM.render(<ToDoView/>, document.querySelector('#app-container'))
