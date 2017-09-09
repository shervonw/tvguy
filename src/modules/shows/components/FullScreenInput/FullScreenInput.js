import React from 'react';
import './style.css';


const FullScreenInput = ({ handleKeyPress }) => {
  return (
    <div style={ inputContainer }>
      <input
        type="text"
        className="full-screen-input"
        placeholder="Search for any TV show"
        onKeyPress={ handleKeyPress }
      />
    </div>
  )
}

const inputContainer = {
  display: 'flex',
  color: 'rgba(0,0,0,0.8)',
  width: '100%',
  height: '90vh',
  alignItems: 'center',
  justifyContent: 'center'
};

export default FullScreenInput;