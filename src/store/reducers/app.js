import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from "../actions/actionTypes";

const initialState = {
  modals: {
    meal: { visible: false },
    food: { visible: false },
    store: { visible: false },
    dungeon: { visible: false },
    welcome: { visible: true },
  },
};

const openModal = (state, { modalName }) => ({
  ...state,
  modals: {
    ...state.modals,
    [modalName]: { ...state.modals[modalName], visible: true },
  },
});

const closeModal = (state, { modalName }) => ({
  ...state,
  modals: {
    ...state.modals,
    [modalName]: { ...state.modals[modalName], visible: false },
  },
});

const toggleModal = (state, { modalName }) => ({
  ...state,
  modals: {
    ...state.modals,
    [modalName]: {
      ...state.modals[modalName],
      visible: !state.modals[modalName].visible,
    },
  },
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return openModal(state, action);
    case CLOSE_MODAL:
      return closeModal(state, action);
    case TOGGLE_MODAL:
      return toggleModal(state, action);
    default:
      return state;
  }
};

export default appReducer;
