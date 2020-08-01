import React, { useContext } from 'react';
import { CALCULATORS, FORMULA_NAMES } from '../Constants';
import { DataContext, ModalContext } from '../Contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

export default function Settings() {
  const { data, onChangeData } = useContext(DataContext);
  const { onOpenModal } = useContext(ModalContext);
  const { max, formula, settingsOpened } = data;
  const onChangeMax = e => onChangeData({ max: e.target.value && parseFloat(e.target.value) });
  const onChangeFormula = e => onChangeData({ formula: e.target.value });
  const openFormulaInModal = () => onOpenModal({ ...CALCULATORS[formula].modal });

  return !settingsOpened ? null : (
    <section>
      <div className="md:flex">
        <label className="block mb-4 md:flex-1 md:mr-10">
          <span className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase">
            Formulas
            <button
              title={`About ${CALCULATORS[formula].modal.title}`}
              className="ml-1"
              onClick={openFormulaInModal}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
            </button>
            <a
              href="https://en.wikipedia.org/wiki/One-repetition_maximum"
              title="Open Wikipedia - One-Repetition Maximum"
              className="ml-1 text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWikipediaW} />
            </a>
          </span>
          <div className="relative">
            <select
              data-testid="formulaSelect"
              className="appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight pr-8 px-3 py-2 rounded shadow text-gray-700 w-full"
              value={formula}
              onChange={onChangeFormula}>
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
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </label>
        <label className="block mb-4 md:flex-1">
          <span className="block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase">
            Rows
          </span>
          <input
            data-testid="rowsInput"
            type="number"
            className="appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-700 w-full"
            placeholder="Enter a number..."
            value={max}
            onChange={onChangeMax}
          />
          <span className="block mt-2 text-gray-500 text-xs tracking-wide">
            Max rows to display.
          </span>
        </label>
      </div>
    </section>
  );
}
