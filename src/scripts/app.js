import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';




const ToDoView=React.createClass({


  render: function(){
    return (
    <div className="big-container">
      <div className="header">
        <h1> TO DO LIST </h1>
        <input type="text" name="search" placeholder=""/>
        <button type="button">+</button>
        <hr/>
      </div>

      <ul className="list-items">
        <li><input type="checkbox" name="vehicle" value="Bike"></input>wash cat<button type="button">X</button></li>
        <li><input type="checkbox" name="vehicle" value="Bike"></input>read book<button type="button">X</button></li>
        <li><input type="checkbox" name="vehicle" value="Bike"></input>rethink my life<button type="button">X</button></li>
        <li><input type="checkbox" name="vehicle" value="Bike"></input>go swimming<button type="button">X</button></li>
      </ul>

    </div>
    )
  }



})

const InputComponent = React.createClass({
	_handleNewSecret: function(){
		let newObjSecret = {
			msg: this.refs.secretInput.value,
			name: this.refs.usernameInput.value
		}

		this.props.updateSecretsCb(newObjSecret)
		this.refs.secretInput.value = ''
		this.refs.usernameInput.value = ''

	},

	render: function(){
		return (
			<div className="secret-box">
				<input ref="secretInput" type='text' className="form-control" placeholder="Your secret"/>
				<input ref="usernameInput" type='text' className="form-control" placeholder="Your name" style={{maxWidth: '200px', margin: '10px', }}/>
				<button className="btn btn-success btn-lg" onClick={this._handleNewSecret}>
 					<i className="fa fa-plus"/>
				</button>
			</div>
		)
	}
})

ReactDOM.render(<ToDoView/>, document.querySelector('#app-container'))
