import React from 'react';

export default {
  modal: {
    title: 'Brzycki',
    body: (<img alt="formula" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f" />)
  },
  getOneRm(weight, rep) {
    return weight * (36.0 / (37.0 - rep));
  },
  getWeight(oneRm, rep) {
    return oneRm / (36.0 / (37.0 - rep));
  }
}
