import { PICK_DATE, SAVE_SECOM, HAFKADOT, ADD_HAFKADA } from './types';

const initialState = {
  date: '',
  secom: '',
  hafkadot: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PICK_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SAVE_SECOM:
      return {
        ...state,
        secom: action.payload,
      };
    case HAFKADOT:
      return {
        ...state,
        hafkadot: action.payload,
      };
    case ADD_HAFKADA:
      console.log(state.firestore.ordered.kopot[0].hafkadot);
      /*
      return {
        ...state,
        hafkadot: [
          ...state.firestore.ordered.kopot[0].hafkadot,
          action.payload,
        ],
      };
*/
      return {
        ...state,
        hafkadot: [...state.hafkadot, action.payload],
      };
    default:
      return state;
  }
};
