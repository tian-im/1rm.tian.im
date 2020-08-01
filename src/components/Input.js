import React, { useContext } from 'react';
import Settings from './Settings';
import { UNITS } from '../Constants';
import { DataContext } from '../Contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Input() {
  const { data, onChangeData } = useContext(DataContext);
  const { weight, unit, rep, settingsOpened } = data;
  const onChangeWeight = e => onChangeData({ weight: e.target.value && parseFloat(e.target.value) });
  const onChangeRep = e => onChangeData({ rep: e.target.value && parseFloat(e.target.value) });
  const onChangeUnit = e => onChangeData({ unit: e.target.value });
  const onToggleSettings = e => onChangeData({ settingsOpened: !settingsOpened });

  return (
    <section>
      <div className="md:flex">
        <label className="block mb-4 md:flex-1 md:mr-10">
          <span className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase">
            Weight
          </span>
          <div className="flex">
            <input
              data-testid="weightInput"
              type="number"
              className="appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded-l shadow text-gray-700 w-full"
              placeholder="Enter a number..."
              value={weight}
              onChange={onChangeWeight}
            />
            <div className="relative">
              <select
                data-testid="unitSelect"
                className="appearance-none bg-white border border-l-none focus:outline-none focus:shadow-outline leading-tight pr-8 px-3 py-2 rounded-r shadow text-gray-700"
                value={unit}
                onChange={onChangeUnit}
              >
                {UNITS.map(unit => <option key={unit} value={unit}>{unit}</option>)}
              </select>
              <span className="absolute flex inset-y-0 items-center pointer-events-none px-2 right-0 text-gray-700">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>
        </label>
        <span className="block mb-4 md:flex-1">
          <label
            className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase"
            htmlFor="repInput"
          >
            Rep
          </label>
          <div className="relative pr-10">
            <input
              id="repInput"
              data-testid="repInput"
              type="number"
              className="appearance-none bg-white border flex-1 focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-700 w-full"
              placeholder="Enter a number..."
              value={rep}
              onChange={onChangeRep}
            />
            <span
              title="Settings"
              onClick={onToggleSettings}
              className="absolute block cursor-pointer p-2 right-0 top-0"
            >
              <FontAwesomeIcon icon={faCog} size="lg" />
            </span>
          </div>
        </span>
      </div>
      <Settings />
    </section>
  );
}
