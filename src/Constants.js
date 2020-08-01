import BrzyckiCalculator from './calculators/BrzyckiCalculator';
import EpleyCalculator from './calculators/EpleyCalculator';
import LombardiCalculator from './calculators/LombardiCalculator';
import MayhewCalculator from './calculators/MayhewCalculator';
import McGlothinCalculator from './calculators/McGlothinCalculator';
import OConnerCalculator from './calculators/OConnerCalculator';
import WathenCalculator from './calculators/WathenCalculator';

export const CALCULATORS = {
  Epley: EpleyCalculator,
  Brzycki: BrzyckiCalculator,
  Lombardi: LombardiCalculator,
  Mayhew: MayhewCalculator,
  McGlothin: McGlothinCalculator,
  OConner: OConnerCalculator,
  Wathen: WathenCalculator
}
export const FORMULA_NAMES = Object.keys(CALCULATORS)
export const UNITS = ['kg', 'lb']
export const DEFAULT_DATA = {
  weight: 100, rep: 1, unit: UNITS[0],
  settingsOpened: false, max: 10, formula: FORMULA_NAMES[0],
  highlighted: []
}
export const DEFAULT_MODAL = {}
export const ESC_KEYCODE = 27
