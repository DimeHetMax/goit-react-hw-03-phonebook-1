import React from 'react'
import { nanoid } from 'nanoid'

import './App.css'

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }
  handleForm = (event) =>{
    event.preventDefault()
    const modelId = nanoid() 
    this.setState(prevState =>{
      return({
        contacts:[... prevState.contacts, {name: prevState.name, number: prevState.number, id: modelId}],
        name: "",
        number:"",
      })
    })
    event.target.reset();
  }
  handleInput=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
  }
  handleFilteredContacts = (event) =>{
    console.log(event.target.value);
    this.setState({filter: event.target.value.toLowerCase()})
  }
  render(){
    const {contacts, name, filter} = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    console.log(filteredContacts);
    
    return(
      <div>
        <h1>Phone Book</h1>
        <form onSubmit={this.handleForm}>
        <label >
        Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange = {this.handleInput}
            value={name}
          />
        </label>
        <label >
        Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange = {this.handleInput}
          />
        </label>
       
            <button type="submit">Add contacts</button>
        </form>
        <h2>Contacts</h2>
        <div>
          <label>
            Find contacts by name
            <input type="text" onChange={this.handleFilteredContacts}/>
          </label>
        </div>
        {filter !== "" ? 
        ( <div>
          <ul>
            {filteredContacts.map(contact => {
              return(<li key={contact.id}>{contact.name}: {contact.number}</li>)})}
          </ul>
        </div>): 
        (contacts.length > 0 &&  (
          <div>
            <ul>
              {contacts.map(contact => {
                return(<li key={contact.id}>{contact.name}: {contact.number}</li>)})}
            </ul>
          </div>
        ))}


      </div>
    )
  }
  
}

export default App



// {contacts.length > 0 &&  (
//   <div>
//   <h2>Contacts</h2>
//     <div>
//       <label>
//         Find contacts by name
//         <input type="text" onChange={this.handleFilteredContacts}/>
//       </label>
//     </div>
//     <ul>
//       {contacts.map(contact => {
//         return(<li key={contact.id}>{contact.name}: {contact.number}</li>)})}
//     </ul>
//   </div>
// )}