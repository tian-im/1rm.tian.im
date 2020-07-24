import React, { useState } from 'react';
import './App.scss';
import './styles/tailwind.css';
import Formulas from './components/Formulas/Formulas';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import Modal from './components/Modal/Modal';

const ESC_KEYCODE = 27;

function App() {
  const [modal, setModal] = useState({});
  const openModal = (props) => setModal({ ...props, isOpen: true });
  const closeModal = () => setModal({});
  const onKeyUp = (e) => { if (e.keyCode === ESC_KEYCODE && modal.isOpen) { closeModal(); } };

  const [data, setData] = useState({});
  const onDataUpdate = (value) => setData({ ...data, ...value });

  return (
    <div onKeyUp={onKeyUp} className="h-full">
      <div className="flex content-center h-full">
        <div className="w-1/2 self-center text-center">
          <Formulas current={data.formula} onDataUpdate={onDataUpdate} openModal={openModal}></Formulas>
          <Input {...data} onDataUpdate={onDataUpdate}></Input>
        </div>
        <div className="w-1/2 self-center text-center">
          <Output></Output>
        </div>
      </div>
      <Modal {...modal} onClose={closeModal}></Modal>
    </div>
  );
}

export default App;
