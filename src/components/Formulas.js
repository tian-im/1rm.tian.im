import React from 'react';
import { CALCULATORS, FORMULA_NAMES } from '../Constants';

export default function Formulas({current, onChangeData, openModal}) {
  current = current || FORMULA_NAMES[0];

  const onChange = (e) => onChangeData({ formula: e.target.value });
  const openFormulaInModal = () => openModal({ ...CALCULATORS[current] });

  return (
    <div className="">
      <label className="">
        <span className="block">Formulas</span>
        <select value={current} onChange={onChange} className="">
          {
            FORMULA_NAMES.map(name => <option key={name} value={name}>{name}</option>)
          }
        </select>
        <span className="" onClick={openFormulaInModal}>i</span>
      </label>
    </div>
  );
}
