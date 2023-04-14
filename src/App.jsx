import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Hero />
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </div>
  );
}

export default App;
