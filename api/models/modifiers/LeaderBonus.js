import { Characteristics as C } from '../../constants';
import { numberOption } from './ModifierOptions';
import { Dice, parseDice } from '../dice';
import BaseModifier from './BaseModifier';
import Bonus from './Bonus';

export default class LeaderBonus extends BaseModifier {
  constructor({ characteristic, numLeaders = 1, bonus = 1 }) {
    super({ characteristic });
    this.numLeaders = Number(numLeaders);
    this.bonus = parseDice(bonus);
  }

  static get name() {
    return 'Leader Bonus';
  }

  static get description() {
    return 'Add {bonus} for {characteristic} to the leader of this unit ({numLeaders} leaders)';
  }

  static get availableCharacteristics() {
    return [C.ATTACKS, C.TO_HIT, C.TO_WOUND, C.REND, C.DAMAGE];
  }

  static get options() {
    return {
      ...super.options,
      bonus: numberOption({ defaultVal: 1, allowDice: true }),
      numLeaders: numberOption({ defaultVal: 1 }),
    };
  }

  // eslint-disable-next-line no-unused-vars
  resolve(owner) {
    return this.numLeaders * this.getBonus();
  }

  getBonus() {
    if (this.bonus instanceof Dice) {
      return this.bonus.average;
    }
    return this.bonus;
  }

  getAsBonusModifier() {
    return new Bonus({ characteristic: this.characteristic, bonus: this.bonus });
  }
}