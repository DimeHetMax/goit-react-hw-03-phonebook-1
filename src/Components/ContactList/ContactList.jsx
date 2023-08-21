import React from "react";
import PropTypes from 'prop-types';
export class ContactList extends React.Component{
    render(){
        const {contacts, filter, filteredContacts, deleteContact} = this.props;
        return(
            <div> 
                {filter !== "" ? 
                ( <div>
                    <ul>
                    {filteredContacts.map(contact => {
                        return(<li key={contact.id}>{contact.name}: {contact.number} <button className="delete-contact" style={{padding:0}} onClick={()=>deleteContact(contact.id)}>Delete</button></li>)})}
                    </ul>
                </div>): 
                (contacts.length > 0 &&  (
                    <div>
                    <ul>
                        {contacts.map(contact=> {
                        return(<li key={contact.id}>{contact.name}: {contact.number} <button className="delete-contact" style={{padding:0}} onClick={()=>deleteContact(contact.id)}>Delete</button></li>)})}
                    </ul>
                    </div>
                ))}
            </div>
        )
    }
}
ContactList.propTypes ={
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
          }).isRequired,
    ),
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
          }).isRequired,
    ),
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}