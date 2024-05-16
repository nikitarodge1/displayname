import React, { useState } from 'react';

function DisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === '') {
      setFirstNameError(true);
      return;
    }
    if (lastName.trim() === '') {
      setLastNameError(true);
      return;
    }

    setFullName(`${firstName} ${lastName}`);
    setFirstNameError(false);
    setLastNameError(false);
  };
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameError(false); 
  };
  
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameError(false); 
  };
  
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder={firstNameError ? "Please fill out this field" : "First Name"}
          />
        </label>
        {firstNameError && <div style={{ color: 'red' }}>Please fill out this field</div>}
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder={lastNameError ? "Please fill out this field" : "Last Name"}
          />
        </label>
        {lastNameError && <div style={{ color: 'red' }}>Please fill out this field</div>}
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default DisplayName;


