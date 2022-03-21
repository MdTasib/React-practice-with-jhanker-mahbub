import React from 'react';
import { addToDB } from '../../utilities/fakeDB';

const User = ({user}) => {
  const {name, phone, iban, pin} = user;

  const setUser = (user) => {
    addToDB(user);
  }

  return (
    <div style={{border: '5px solid green', margin: '20px', padding: '20px'}}>
      <h4>{name}</h4>
      <p>{phone}</p>
      <p>{iban}</p>
      <p>{pin}</p>
      <button onClick={() => setUser(user.pin)}>Set Stroage</button>
    </div>
  );
};

export default User;