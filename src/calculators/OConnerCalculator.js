import React from 'react';

export default {
  modal: {
    title: "O'Conner et al.",
    body: (<img alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f" />)
  },
  getOneRm(weight, rep) {
    return weight * (1 + rep / 40);
  },
  getPercentage(rep) {
    return 1 / (1 + rep / 40);
  },
  getWeight(oneRm, rep) {
    return oneRm / (1 + rep / 40);
  }
}
