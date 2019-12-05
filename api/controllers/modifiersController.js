/* eslint-disable import/prefer-default-export */
import { MODIFIERS } from './../models/modifiers';

export const getModifiers = () => Object.keys(MODIFIERS).map((key) => ({
  id: key,
  ...MODIFIERS[key].metadata,
}));