import React from 'react';
import { CALCULATORS } from '../Constants';

export default function Output({ formula, weight, unit, rep }) {
  const calculator = CALCULATORS[formula];
  const oneRm = calculator.getOneRm(weight, rep);

  return (
    <div className="">
      <label className="">
        <span className="">Output</span>
        {oneRm} {unit}
      </label>
    </div>
  );
}
