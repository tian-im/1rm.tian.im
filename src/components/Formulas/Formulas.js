import React from 'react';
import './Formulas.scss';

function Formulas({setFormula, openModal}) {
  return (
    <div className="">
      <label className="">
        <span className="block">
          <span className="">Formulas</span>
          <span className="" onClick={() => openModal({ title: "This is a title", body: "body" })}>i</span>
        </span>
        <select className="">
        </select>
      </label>
    </div>
  );
}

export default Formulas;
