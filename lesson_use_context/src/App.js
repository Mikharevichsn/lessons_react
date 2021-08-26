import React, { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import MyContext, { store } from './Context';

const App = () => {
  const [counter, setCounter] = useState(3);
  return (
    <div className='App'>
      <MyContext.Provider value={store}>
        <Header counter={counter} />
        <Main counter={counter} />
        <Footer counter={counter} />
      </MyContext.Provider>
    </div>
  );
};

export default App;
