import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Food from './components/Food'
import './style.css'

function App() {
  return (
    <div>
      <Header />
      <Food />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));