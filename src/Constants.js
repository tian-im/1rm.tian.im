import EpleyCalculator from './calculators/EpleyCalculator';
import BrzyckiCalculator from './calculators/BrzyckiCalculator';

export const CALCULATORS = {
  Epley: EpleyCalculator,
  Brzycki: BrzyckiCalculator
}
export const FORMULA_NAMES = Object.keys(CALCULATORS)
export const DEFAULT_DATA = { weight: 100, rep: 1, unit: 'kg', formula: FORMULA_NAMES[0] }
export const DEFAULT_MODAL = {}
export const ESC_KEYCODE = 27
