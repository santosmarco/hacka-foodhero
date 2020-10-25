import { ADD_BITBANANAS, SET_NEXT_CHAR } from "./actionTypes";

export const addBitBananas = (amount) => ({ type: ADD_BITBANANAS, amount });
export const setNextChar = () => ({ type: SET_NEXT_CHAR });
