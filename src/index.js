import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Food from './components/Food'
import './style.css'

function App() {
  return (
    <>
      <Header />
      <Food />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));