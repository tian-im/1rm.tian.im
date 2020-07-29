import React from 'react';

export default {
  modal: {
    title: 'Wathen',
    body: (<img alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f" />)
  },
  getOneRm(weight, rep) {
    return weight * (100 / (48.8 + 53.8 * Math.pow(Math.E, -0.075 * rep)));
  },
  getPercentage(rep) {
    return 1 / (100 / (48.8 + 53.8 * Math.pow(Math.E, -0.075 * rep)));
  },
  getWeight(oneRm, rep) {
    return oneRm / (100 / (48.8 + 53.8 * Math.pow(Math.E, -0.075 * rep)));
  }
}
