import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from "./actionTypes";

export const openModal = (modalName) => ({ type: OPEN_MODAL, modalName });
export const closeModal = (modalName) => ({ type: CLOSE_MODAL, modalName });
export const toggleModal = (modalName) => ({ type: TOGGLE_MODAL, modalName });
