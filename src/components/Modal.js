import React, { useContext } from 'react';
import { ModalContext } from '../Contexts';

export default function Modal() {
  const { modal, onCloseModal } = useContext(ModalContext);
  const { isOpen, title, body } = modal;

  const closeIcon = (
    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
    </svg>
  );

  return !isOpen ? null : (
    <section className="modal fixed flex h-full items-center justify-center left-0 top-0 w-full">
      <div className="modal-overlay absolute bg-gray-900 h-full opacity-50 w-full"></div>
      <div className="modal-container bg-white md:max-w-md mx-auto overflow-y-auto rounded shadow-lg w-11/12 z-50">

        <div
          onClick={onCloseModal}
          className="modal-close absolute cursor-pointer flex flex-col items-center mr-4 mt-4 right-0 text-sm text-white top-0 z-50"
        >
          {closeIcon}
          <span className="text-sm">(Esc)</span>
        </div>

        <div className="modal-content px-6 py-4 text-left">
          <div className="flex items-center justify-between pb-3">
            <p className="text-2xl font-bold">{title || "model title"}</p>
            <div
              onClick={onCloseModal}
              className="modal-close cursor-pointer text-black z-50"
            >
              {closeIcon}
            </div>
          </div>
          {body}
          <div className="flex justify-end pt-2">
            <button
              onClick={onCloseModal}
              className="modal-close bg-blue-500 focus:outline-none focus:shadow-outline font-bold hover:bg-blue-700 px-4 py-2 rounded text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
