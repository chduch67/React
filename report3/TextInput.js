import React from 'react';

const TextInput = ({ value, onChange, placeholder }) => (
  <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
);

export default TextInput;
