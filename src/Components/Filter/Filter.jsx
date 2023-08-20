import React from "react";
import PropTypes from 'prop-types';

export class Filter extends React.Component{

 render(){
    const {handleFilteredContacts} = this.props
    return(
        <label>
            Find contacts by name
            <input type="text" onChange={handleFilteredContacts}/>
          </label>
    )
 }
}
Filter.propTypes={
  handleFilteredContacts: PropTypes.func.isRequired
}