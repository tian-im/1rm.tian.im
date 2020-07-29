import React from 'react';
import { CALCULATORS } from '../Constants';

const toRange = (min, max) => Array.from({ length: max }, (v, k) => k + min);
const toPercentage = (number) => (number * 100).toFixed(0);

export default function Output({ formula, weight, unit, max, rep }) {
  const calculator = CALCULATORS[formula];
  const oneRm = calculator.getOneRm(weight || 0, rep || 0);

  return (
    <section className="mb-4 md:mb-0">
      <table className="bg-white border-collapse mt-5 shadow table-auto table-striped w-full whitespace-no-wrap">
        <thead>
          <tr className="border-b">
            <th className="bg-gray-200 border-gray-200 font-bold px-6 py-2 sticky text-gray-600 text-sm top-0 tracking-wider uppercase w-1/3">Percentage</th>
            <th className="bg-gray-200 border-gray-200 font-bold px-6 py-2 sticky text-gray-600 text-sm top-0 tracking-wider uppercase w-1/3">Rep</th>
            <th className="bg-gray-200 border-gray-200 font-bold px-6 py-2 sticky text-gray-600 text-sm top-0 tracking-wider uppercase w-1/3">Weight</th>
          </tr>
        </thead>
        <tbody>
          {toRange(1, max).map((rep, _index, array) => (
            <tr key={rep} className="border-b">
              <td className="border-gray-200 px-6 py-2 text-center text-gray-600 text-sm">{toPercentage(calculator.getPercentage(rep))}%</td>
              <td className="border-gray-200 px-6 py-2 text-center text-gray-600 text-sm">{rep}</td>
              <td className="border-gray-200 px-6 py-2 text-center text-gray-600 text-sm">{calculator.getWeight(oneRm, rep).toFixed(0)}{unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
