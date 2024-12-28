import React, { useState } from 'react';

const Xdisplayname = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ padding: '5px', marginLeft: '10px', width: '200px' }}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ padding: '5px', marginLeft: '10px', width: '200px' }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 15px', marginTop: '10px' }}>Submit</button>
      </form>
      {fullName && <div id="output" style={{ marginTop: '20px', fontSize: '1.2em' }}>Full Name: {fullName}</div>}
    </div>
  );
};

export default Xdisplayname;