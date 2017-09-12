import React from 'react';
import './style.css';


const FullScreenInput = ({ handleKeyPress }) => {
  return (
    <div style={ inputContainer }>
      <input
        autoFocus
        type="text"
        className="full-screen-input"
        placeholder="Start searching for your favorite TV Shows"
        onKeyPress={ handleKeyPress }
      />
    </div>
  )
}

const inputContainer = {
  display: 'flex',
  color: 'rgba(0,0,0,0.8)',
  width: '100%',
  height: '80vh',
  alignItems: 'center',
  justifyContent: 'center'
};

export default FullScreenInput;