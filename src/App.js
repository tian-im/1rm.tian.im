import React, { useState } from 'react';
import './App.scss';
import './styles/tailwind.css';
import Formulas from './components/Formulas/Formulas';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import Modal from './components/Modal/Modal';

function App() {
  const [modal, setModal] = useState({});

  const openModal = (props) => setModal({ ...props, isOpen: true });
  const closeModal = () => setModal({});
  const onKeyDown = (e) => { if (e.keyCode === 27 && modal.isOpen) { closeModal(); } }

  const [data, setData] = useState({});

  const setFormula = (formula) => setData({ ...data, formula: formula })
  return (
    <div onKeyDown={onKeyDown} className="h-full">
      <div className="flex content-center h-full">
        <div className="w-1/2 self-center text-right">
          <Formulas setFormula={setFormula} openModal={openModal}></Formulas>
          <Input></Input>
        </div>
        <div className="w-1/2 self-center text-left">
          <Output></Output>
        </div>
      </div>
      <Modal {...modal} onClose={closeModal}></Modal>
    </div>
  );
}

export default App;
