import './styles/tailwind.css';
import './App.scss';

import React, { useState } from 'react';

import {
  ESC_KEYCODE, DEFAULT_MODAL, DEFAULT_DATA
} from './Constants';

import Input from './components/Input';
import Output from './components/Output';
import Modal from './components/Modal';

export default function App() {
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const onOpenModal = (props) => setModal({ ...props, isOpen: true });
  const onCloseModal = () => setModal(DEFAULT_MODAL);
  const onKeyUp = (e) => { if (e.keyCode === ESC_KEYCODE && modal.isOpen) { onCloseModal(); } };

  const [data, setData] = useState(DEFAULT_DATA);
  const onChangeData = (value) => setData({ ...data, ...value });

  return (
    <div onKeyUp={onKeyUp} className="h-full">
      <div className="content-center flex h-full">
        <div className="m-4 md:m-auto md:max-w-screen-md w-full">
          <h1 className="text-gray-700 text-center text-2xl mb-8 font-bold">
            One-Repetition Maximum Calculator
          </h1>
          <Input {...data} onChangeData={onChangeData} onOpenModal={onOpenModal}></Input>
          <Output {...data}></Output>
        </div>
      </div>
      <Modal {...modal} onClose={onCloseModal}></Modal>
    </div>
  );
}
