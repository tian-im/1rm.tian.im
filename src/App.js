import React, { useState } from 'react';
import './App.scss';
import './styles/tailwind.css';
import Formulas from './components/Formulas';
import Input from './components/Input';
import Output from './components/Output';
import Modal from './components/Modal';
import {
  ESC_KEYCODE, DEFAULT_MODAL, DEFAULT_DATA
} from './Constants';

export default function App() {
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const openModal = (props) => setModal({ ...props, isOpen: true });
  const closeModal = () => setModal(DEFAULT_MODAL);
  const onKeyUp = (e) => { if (e.keyCode === ESC_KEYCODE && modal.isOpen) { closeModal(); } };

  const [data, setData] = useState(DEFAULT_DATA);
  const onChangeData = (value) => setData({ ...data, ...value });

  return (
    <div onKeyUp={onKeyUp} className="h-full">
      <div className="flex content-center h-full">
        <div className="w-1/2 self-center text-center">
          <Formulas current={data.formula} onChangeData={onChangeData} openModal={openModal}></Formulas>
          <Input {...data} onChangeData={onChangeData}></Input>
        </div>
        <div className="w-1/2 self-center text-center">
          <Output {...data}></Output>
        </div>
      </div>
      <Modal {...modal} onClose={closeModal}></Modal>
    </div>
  );
}
