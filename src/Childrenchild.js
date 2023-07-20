import React, { useContext, Dispatch } from 'react';
import { UserContext } from './App';
import { AdminContext } from './App';
import { NumberContext } from './App';
import { NumberDispatchContext } from './App';

function Childrenchild() {
  const user = useContext(UserContext);
  const admin = useContext(AdminContext);
  const num = useContext(NumberContext);
  const numDispatch = useContext(NumberDispatchContext);

  const onClickHandler = () => {
    // console.log(num);
    numDispatch({ type: 'INCREMENT' });
  };

  return (
    <>
      <div style={{ border: '1px solid #000' }}>
        <p>username: {user.name}</p>
        <p>userNum: {user.num}</p>

        <br />
        <p>adminname: {admin.name}</p>
        <br />
        <p>num: {num}</p>
        <button onClick={onClickHandler}>click</button>
      </div>
    </>
  );
}

export default Childrenchild;
