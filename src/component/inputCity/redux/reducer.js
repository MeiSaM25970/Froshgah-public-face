import { INPUT_CITY } from "./actions";
export function cityReducer(state = [], action) {
  switch (action.type) {
    case INPUT_CITY:
      return [...state, action.payload];
    default:
      return state;
  }
}
