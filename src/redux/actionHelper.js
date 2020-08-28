import {
  PICK_DATE,
  SAVE_SECOM,
  HAFKADOT,
  SET_HAFKADA,
  ADD_HAFKADA,
} from './types';

// get the datePicker
export const getDate = (date) => {
  return {
    type: PICK_DATE,
    payload: date,
  };
};

// save the secom to redux
export const getSecom = (secom) => {
  return {
    type: SAVE_SECOM,
    payload: secom,
  };
};

// save table hafkdot from firebase to redux helper
export const putHafkadot = (hafkadot) => {
  return {
    type: HAFKADOT,
    payload: hafkadot,
  };
};

// save table of hafkadot to redux after edit
export const setHafkadot = (res) => {
  return {
    type: SET_HAFKADA,
    payload: res,
  };
};

// save to redux doc off add hafkada
export const add_hafkada = (res) => {
  return {
    type: ADD_HAFKADA,
    payload: res,
  };
};
