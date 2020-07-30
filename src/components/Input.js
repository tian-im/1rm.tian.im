import React, { useContext } from 'react';
import Formulas from './Formulas';
import { UNITS } from '../Constants';
import { DataContext } from '../Contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Input() {
  const { data, onChangeData } = useContext(DataContext);
  const { weight, unit, rep } = data;
  const onChangeWeight = e => onChangeData({ weight: e.target.value && parseFloat(e.target.value) });
  const onChangeRep = e => onChangeData({ rep: e.target.value && parseFloat(e.target.value) });
  const onChangeUnit = e => onChangeData({ unit: e.target.value });

  return (
    <section>
      <div className="md:flex">
        <Formulas />
        <label className="block mb-4 md:flex-1 md:mr-10">
          <span
            className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase"
          >
            Rep
          </span>
          <input
            className="appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-700 w-full"
            value={rep}
            onChange={onChangeRep}
          />
        </label>
        <label className="block mb-4 md:flex-1">
          <span
            className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase"
          >
            Weight
          </span>
          <div className="flex">
            <input
              className="appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded-l shadow text-gray-700 w-full"
              value={weight}
              onChange={onChangeWeight}
            />
            <div className="relative">
              <select
                className="appearance-none bg-white border border-l-none focus:outline-none focus:shadow-outline leading-tight pr-8 px-3 py-2 rounded-r shadow text-gray-700"
                value={unit}
                onChange={onChangeUnit}
              >
                {UNITS.map(unit => <option key={unit} value={unit}>{unit}</option>)}
              </select>
              <span className="absolute flex inset-y-0 items-center pointer-events-none px-2 right-0 text-gray-700">
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
}
