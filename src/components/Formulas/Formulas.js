import React from 'react';
import './Formulas.scss';
import Epley from './Epley.js';
import Brzycki from './Brzycki.js';

const allFormulas = {
  Epley: Epley,
  Brzycki: Brzycki
};

const formulaNames = Object.keys(allFormulas);

function Formulas({current, onDataUpdate, openModal}) {
  current = current || formulaNames[0];

  const onChange = (e) => onDataUpdate({ formula: e.target.value });
  const openFormulaInModal = () => {
    const Tag = allFormulas[current];
    openModal({ title: current, body: (<Tag />) });
  }

  return (
    <div className="">
      <label className="">
        <span className="block">Formulas</span>
        <select value={current} onChange={onChange} className="">
          { formulaNames.map((name) => {
            return (<option key={name} value={name}>{name}</option>)
          }) }
        </select>
        <span className="" onClick={openFormulaInModal}>i</span>
      </label>
    </div>
  );
}

export default Formulas;
