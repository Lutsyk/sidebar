import React, { Component } from 'react'
import { SearchBox } from '../searchBox/searchBox.component.jsx'
import { Table } from '../table/table.component.jsx'
import './table-main.styles.css'

class TableMain extends Component {

    constructor(){
      super()
  
      this.state = {
        users: [],
        searchField: '',
        sort: '',
        previustarget: '',
        searchFieldForSubmit: ''
      };
    }
  
    // if component did mount => load json
    componentDidMount(){
      fetch('https://swapi.dev/api/people/?format=json')
      .then(response => response.json())
      .then(result => this.setState({users: result.results}))
    }

    // Search on submit button
    handleSubmit = (e) => {
      e.preventDefault()
      this.setState({searchFieldForSubmit: this.state.searchField})
    }
  
    // add search field value to state
    handleChange = e => {
      this.setState({searchField: e.target.value})
    }

    // change arrows(up||down) and sort rows ASC or DSC
    handleClick = e => {
      this.setState({previustarget: e.currentTarget})
      let oldState = this.state.previustarget
      if(this.state.sort === 'ASC'){
        const sorted = [...this.state.users].sort((a,b)=>{
          if((e.target.dataset.value)==='height' || (e.target.dataset.value)==='mass'){
            return b[e.target.dataset.value] - a[e.target.dataset.value]
          } else {
            if(a[e.target.dataset.value].toLowerCase() > b[e.target.dataset.value].toLowerCase()){
              return 1
            } else{
              return -1
            } 
          }
        }
        );
        if(oldState !== ''){
          oldState.className = "arrowSection"
        }
        e.currentTarget.className = "arrowSectionUp"
        this.setState({users: sorted})
        this.setState({sort: 'DSC'})
      } else {
        const sorted = [...this.state.users].sort((a,b)=>{
          if((e.target.dataset.value)==='height'||(e.target.dataset.value)==='mass'){
            return a[e.target.dataset.value] - b[e.target.dataset.value]
          } else {
            if(a[e.target.dataset.value].toLowerCase() < b[e.target.dataset.value].toLowerCase()){
              return 1
            } else{
              return -1
            } 
          }
        }
            
        );
        if(oldState !== ''){
          oldState.className = "arrowSection"
        }
        e.currentTarget.className = "arrowSectionDown"
        this.setState({users: sorted})
        this.setState({sort: 'ASC'})
      }
      
    }
  
    render(){
        //filt users
        const { users, searchFieldForSubmit } = this.state;
        //filt users by name
        const filteredUsers = users.filter(user => 
          user.name.toLowerCase().includes(searchFieldForSubmit.toLowerCase())
        );
        //filt users by all param
        // const filteredUsers = users.filter(user => 
        //   user.name.toLowerCase().includes(searchFieldForSubmit.toLowerCase()) || user.mass.toLowerCase().includes(searchFieldForSubmit.toLowerCase())
        //   || user.height.toLowerCase().includes(searchFieldForSubmit.toLowerCase()) || user.birth_year.toLowerCase().includes(searchFieldForSubmit.toLowerCase())
        // );
        

      return (
        <div className='TableMain'>
          <SearchBox
            placeholder={'Type name here...'}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

          <Table 
            users={filteredUsers}
            handleClick={this.handleClick}
          />
        </div>
        );
      }
}
  
  export default TableMain;
