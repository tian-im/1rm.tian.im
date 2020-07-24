import React from 'react';

export default {
  modal: {
    title: 'Epley',
    body: (<img alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d6b2b0a5969fc4d1cc15870a866de150f4459198" />)
  },
  getOneRm(weight, rep) {
    return rep === 1 ? weight : weight * (1.0 + rep / 30.0);
  },
  getWeight(oneRm, rep) {
    return rep === 1 ? oneRm :  oneRm / (1.0 + rep / 30.0);
  }
}
