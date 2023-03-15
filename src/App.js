import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';

import classes from './main.module.css';
import ContextProvider from './store/JobsContextProvider';


function App() {



  return (
    <ContextProvider>

      <Header></Header>
      <main className={classes.main}>
        <List></List>
      </main>


    </ContextProvider>
  );
}

export default App;
