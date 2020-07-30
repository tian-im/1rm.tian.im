import './styles/tailwind.css';
import './App.scss';

import React, { useState } from 'react';

import { ESC_KEYCODE, DEFAULT_MODAL, DEFAULT_DATA } from './Constants';
import { DataContext, ModalContext } from './Contexts';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';
import Modal from './components/Modal';

export default function App() {
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const onOpenModal = props => setModal({ ...props, isOpen: true });
  const onCloseModal = () => setModal(DEFAULT_MODAL);

  const [data, setData] = useState(DEFAULT_DATA);
  const onChangeData = value => setData({ ...data, ...value });

  document.addEventListener('keyup', e => {
    if (e.keyCode === ESC_KEYCODE && modal.isOpen) { onCloseModal(); }
  });

  return (
    <ModalContext.Provider value={{ modal, onOpenModal, onCloseModal }}>
      <DataContext.Provider value={{ data, onChangeData }}>
        <main className="md:pt-32">
          <Navbar />
          <div className="p-4 md:m-auto md:max-w-screen-md w-full">
            <h1 className="text-gray-700 text-center text-2xl mb-8 font-bold">
              One-Repetition Maximum Calculator
            </h1>
            <Input />
            <Output />
          </div>
          <Modal />
        </main>
      </DataContext.Provider>
    </ModalContext.Provider>
  );
}
