import { ADD_BITBANANAS, SET_NEXT_CHAR } from "../actions/actionTypes";

const initialState = {
  name: "Cneopompeo",
  bitBananas: 300,
  level: { current: 7, xp: 300, targetXP: 700 },
  hero: {
    attributes: {
      health: "100%",
      strength: 100,
      armor: 80,
      spell: 40,
      stamina: 60,
    },
    char: "archer",
  },
  dailyGoal: { current: 200, target: 2100 },
  missions: [
    { text: "Comer uma banana às 15:30h", value: 120, done: true },
    { text: "Jantar duas proteínas + purê", value: 200, done: false },
    { text: "Exercitar-se por 1h na rua", value: 300, done: false },
  ],
};

const addBitBananas = (state, { amount }) => ({
  ...state,
  bitBananas: state.bitBananas + amount,
  level: { ...state.level, xp: state.level.xp + amount / 3 },
  dailyGoal: { ...state.dailyGoal, current: state.dailyGoal.current + amount },
});

const setNextChar = (state) => {
  let nextChar;
  switch (state.hero.char) {
    case "archer":
      nextChar = "mage";
      break;
    case "mage":
      nextChar = "necro";
      break;
    case "necro":
      nextChar = "knight";
      break;
    case "knight":
      nextChar = "zombieKnight";
      break;
    case "zombieKnight":
      nextChar = "archer";
      break;
    default:
      break;
  }

  return { ...state, hero: { ...state.hero, char: nextChar } };
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BITBANANAS:
      return addBitBananas(state, action);
    case SET_NEXT_CHAR:
      return setNextChar(state);
    default:
      return state;
  }
};

export default playerReducer;
