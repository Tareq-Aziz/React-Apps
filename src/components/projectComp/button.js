import React from 'react';

const Button = (props) => (
  <button
    type={props.type}
    style={{
      backgroundColor: props.color,
      float: 'right',
      marginTop: '5px',
      marginRight: '20px',
      padding:'5px',
      borderRadius: '5px',
      border:'none',
      color: '#ffffff',
    }}
  >
    <span>{props.name}</span>
  </button>
);
export default Button;
