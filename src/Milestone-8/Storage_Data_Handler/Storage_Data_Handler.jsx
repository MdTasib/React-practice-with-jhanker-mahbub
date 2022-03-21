import React, { useEffect, useState } from 'react';
import User from './components/User/User';

const Storage_Data_Handler = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      {
        users.map(user => <User user={user} key={user.pin}/>)
      }
    </div>
  );
};

export default Storage_Data_Handler;