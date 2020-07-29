import React from 'react';
import { CALCULATORS, FORMULA_NAMES } from '../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

export default function Formulas({current, onChangeData, onOpenModal}) {
  const onChange = (e) => onChangeData({ formula: e.target.value });
  const openFormulaInModal = () => onOpenModal({ ...CALCULATORS[current].modal });

  return (
    <label className="block mb-4 md:flex-1 md:mr-10">
      <span className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase">
        Formulas
        <a href="#" title={`About ${CALCULATORS[current].modal.title}`} className="ml-1" onClick={openFormulaInModal}>
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
        </a>
        <a href="https://en.wikipedia.org/wiki/One-repetition_maximum" title="Open Wikipedia - One-Repetition Maximum" className="ml-1 text-xs" target="_blank">
          <FontAwesomeIcon icon={faWikipediaW}></FontAwesomeIcon>
        </a>
      </span>
      <div className="relative">
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={current}
          onChange={onChange}>
          {FORMULA_NAMES.map(name => <option key={name} value={name}>{CALCULATORS[name].modal.title}</option>)}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </span>
      </div>
    </label>
  );
}
