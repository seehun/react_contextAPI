import React, { useContext } from 'react';
import { UserContext } from './App';
import { AdminContext } from './App';

function Childrenchild() {
  const user = useContext(UserContext);
  const admin = useContext(AdminContext);

  return (
    <>
      <div>
        <p>{user.name}</p>
        <p>{user.num}</p>

        <br />
        <p>{admin.name}</p>
      </div>
    </>
  );
}

export default Childrenchild;
