import { createStore } from "redux";
import { cityReducer } from "./reducer";
export const selectCityStore = createStore(cityReducer);
