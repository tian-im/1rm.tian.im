import React from 'react';

export default {
  modal: {
    title: 'Epley',
    body: (
      <span>
        <img className="inline" alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6b2b0a5969fc4d1cc15870a866de150f4459198" />
        &nbsp; assuming r &gt; 1.
      </span>
    )
  },
  getOneRm(weight, rep) {
    return rep === 1 ? weight : weight * (1.0 + rep / 30.0);
  },
  getPercentage(rep) {
    return rep === 1 ? 1 :  1 / (1.0 + rep / 30.0);
  },
  getWeight(oneRm, rep) {
    return rep === 1 ? oneRm :  oneRm / (1.0 + rep / 30.0);
  }
}
