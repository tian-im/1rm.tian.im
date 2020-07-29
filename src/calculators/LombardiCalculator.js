import React from 'react';

export default {
  modal: {
    title: 'Lombardi',
    body: (<img alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f" />)
  },
  getOneRm(weight, rep) {
    return weight * Math.pow(rep, 0.1);
  },
  getPercentage(rep) {
    return 1 / Math.pow(rep, 0.1);
  },
  getWeight(oneRm, rep) {
    return oneRm / Math.pow(rep, 0.1);
  }
}
