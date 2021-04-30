import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Appbar from './components/Appbar';
import Form from './components/Form';
import Footer from  './components/Footer'

function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <Appbar />
      <Cards />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
