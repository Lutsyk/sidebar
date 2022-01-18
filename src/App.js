import './App.css';
import React, { Component } from 'react'
import TableMain from './components/table-main/table-main.component';
import Home from './components/home/home.component';

class App extends Component {

  constructor(){
    super()

    this.state = {
      sidebar: ''
    };
  }
    //Component select function
    handleClick = (e) => {
      e.preventDefault()
      if(e.target.value === 'home'){
        this.setState({sidebar: e.target.value})
      } else if (e.target.value === 'table'){
        this.setState({sidebar: e.target.value})
      } else {
        console.error('error')
      }
    }
  
    render(){

      return (
        <>
          <div className='sideBar'>
            <button onClick={this.handleClick} value={'home'}>Home</button>
            <button onClick={this.handleClick} value={'table'}>Table</button>
          </div>
          <div className='components'>
            {this.state.sidebar === 'home' && (<Home/>)}
            {this.state.sidebar === 'table' && (<TableMain/>)}
          </div>
        </>
        );
      }
  }
  
  export default App;
