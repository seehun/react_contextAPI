import React, { createContext, useContext, useState } from 'react';
import Children from './Children';

export const UserContext = createContext();
export const AdminContext = createContext();

function App() {
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

  return (
    <>
      <p>{adminState.name}</p>
      <br />
      <button onClick={onClickHandler}>app click</button>
      <UserContext.Provider value={userState}>
        <AdminContext.Provider value={adminState}>
          <div>
            <Children />
          </div>
        </AdminContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
