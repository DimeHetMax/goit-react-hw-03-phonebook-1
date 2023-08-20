import React from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'
import { nanoid } from 'nanoid'
import './App.css'

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: "",
    number:"",
  }
  handleInput=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  handleForm = (event) =>{
    event.preventDefault()
    const {contacts, name}= this.state
    const existingContacts = contacts.find(contact => contact.name.toLowerCase().includes(name.toLocaleLowerCase()))
    if(existingContacts){
      alert(`${existingContacts.name} exists in your contacts `)
      return
    }
    const modelId = nanoid() 
    this.setState(prevState =>{
      return({
        contacts:[... prevState.contacts, {name: prevState.name, number: prevState.number, id: modelId}],
       name:"",
       number:"",
      })
    })
    event.target.reset();
  }
  handleFilteredContacts = (event) =>{
    this.setState({filter: event.target.value.toLowerCase()})
  }
  deleteContact =(id)=>{
    const {contacts} = this.state
    const deletedContact = contacts.filter(contact => contact.id !== id)
    this.setState({contacts: deletedContact})
  }
  componentDidMount(){
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState){
    const {contacts} = this.state
    if(prevState.contacts !== contacts){
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  }
  render(){
    const {contacts, name, number, filter} = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return(
      <div>
        <h1>Phone Book</h1>
        <ContactForm handleForm={this.handleForm} handleInput={this.handleInput} name={name} number={number}/>
        <h2>Contacts</h2>
        <Filter handleFilteredContacts={this.handleFilteredContacts}/> 
        <ContactList contacts={contacts} filter={filter} filteredContacts={filteredContacts} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App;