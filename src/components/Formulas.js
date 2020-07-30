import React, { useContext } from 'react';
import { CALCULATORS, FORMULA_NAMES } from '../Constants';
import { DataContext, ModalContext } from '../Contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

export default function Formulas() {
  const { data, onChangeData } = useContext(DataContext);
  const { onOpenModal } = useContext(ModalContext);
  const { formula } = data;
  const onChange = (e) => onChangeData({ formula: e.target.value });
  const openFormulaInModal = () => onOpenModal({ ...CALCULATORS[formula].modal });

  return (
    <label className="block mb-4 md:flex-1 md:mr-10">
      <span className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase">
        Formulas
        <a
          href="#"
          title={`About ${CALCULATORS[formula].modal.title}`}
          className="ml-1"
          onClick={openFormulaInModal}
        >
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/One-repetition_maximum"
          title="Open Wikipedia - One-Repetition Maximum"
          className="ml-1 text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWikipediaW}></FontAwesomeIcon>
        </a>
      </span>
      <div className="relative">
        <select
          className="appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight pr-8 px-3 py-2 rounded shadow text-gray-700 w-full"
          value={formula}
          onChange={onChange}>
          {FORMULA_NAMES.map(name =>
            <option
              key={name}
              value={name}
            >
              {CALCULATORS[name].modal.title}
            </option>
          )}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </span>
      </div>
    </label>
  );
}
