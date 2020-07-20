import React from 'react';
import styles from './app.module.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import Main from './views/Main/Main'
import ShareYourThoughts from './views/ShareYourThoughts/Share'
import Login from './views/Login/Login' 
import Register from './views/Register/Register' 

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header></Header>
        <div className={styles.container}>
          <Aside></Aside>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/share" component={ShareYourThoughts}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/profile" component={Register}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
