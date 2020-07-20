import React from 'react';
import styles from './app.module.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <div className={styles.container}>
        <Aside></Aside>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
