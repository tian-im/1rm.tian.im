import React from 'react';

export default {
  modal: {
    title: 'McGlothin',
    body: (<img alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f" />)
  },
  getOneRm(weight, rep) {
    return weight * 100 / (101.3 - rep * 2.67123);
  },
  getPercentage(rep) {
    return 1 / (100 / (101.3 - rep * 2.67123));
  },
  getWeight(oneRm, rep) {
    return oneRm / (100 / (101.3 - rep * 2.67123));
  }
}
