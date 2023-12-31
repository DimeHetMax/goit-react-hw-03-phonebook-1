import React from "react";
import PropTypes from 'prop-types';

export class ContactForm extends React.Component{
    render(){
        const {handleForm, handleInput, name, number} =this.props
        return(
            <form onSubmit={handleForm}>
            <label >
            Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange = {handleInput}
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
                onChange = {handleInput}
                value={number}
              />
            </label>
           
                <button type="submit">Add contacts</button>
            </form>
        )
    }
}

ContactForm.propTypes ={
  handleForm: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}