import React from 'react';
import PropTypes from 'prop-types';


const NameCard = (props) => {
    const {id, name, email, remove} = props;
    const onDelete = () => {
        remove(id);
    }
    return (
        <div className='name-card'>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <button className='btn' onClick={onDelete}>Remove</button>
        </div>
    )
}

// NameCard.PropTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired
// }

export default NameCard
