import React from 'react';

export default function Input({ weight, unit, rep, onChangeData }) {
  const onChangeWeight = e => onChangeData({ weight: e.target.value });
  const onChangeRep = e => onChangeData({ rep: e.target.value });
  const onChangeUnit = e => onChangeData({ unit: e.target.value });

  return (
    <div className="">
      <label className="">
        <span className="">Input</span>
        <input value={weight} onChange={onChangeWeight} />
        <input value={unit} onChange={onChangeUnit} />
        <input value={rep} onChange={onChangeRep} />
      </label>
    </div>
  );
}
