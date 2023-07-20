import React, { createContext, useState, useReducer } from 'react';
import Children from './Children';

export const UserContext = createContext();
export const AdminContext = createContext();
export const NumberContext = createContext();
export const NumberDispatchContext = createContext();

function numReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [number, numDispatch] = useReducer(numReducer, 0);

  const [userState, setUserState] = useState({
    name: 'a',
    job: 'idol',
    num: 1,
  });

  const [adminState, setAdminState] = useState({
    name: 'abc',
    job: 'admin',
    id: 1,
  });

  const onClickHandler = () => {
    const changedNum = userState.num + 1;
    setUserState((prevState) => ({
      ...prevState,
      name: 'b',
      num: changedNum,
    }));
    console.log(userState);
  };

  const numberIncreaseHandler = () => {
    numDispatch({ type: 'INCREMENT' });
  };

  return (
    <>
      <p>number: {number}</p>
      <br />
      <button onClick={onClickHandler}>userNameChange</button>
      <button onClick={numberIncreaseHandler}>Numberincrease</button>
      <UserContext.Provider value={userState}>
        <AdminContext.Provider value={adminState}>
          <NumberContext.Provider value={number}>
            <NumberDispatchContext.Provider value={numDispatch}>
              <div>
                <Children />
              </div>
            </NumberDispatchContext.Provider>
          </NumberContext.Provider>
        </AdminContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
