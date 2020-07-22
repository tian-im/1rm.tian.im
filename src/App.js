import React from 'react';
import './App.scss';
import './styles/tailwind.css';
import Algorithm from './components/Algorithm/Algorithm';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

function App() {
  return (
    <div className="flex content-center h-full">
      <div className="w-1/2 self-center text-right">
        <Algorithm></Algorithm>
        <Input></Input>
      </div>
      <div className="w-1/2 self-center text-left">
        <Output></Output>
      </div>
    </div>
  );
}

export default App;
