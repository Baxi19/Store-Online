import data from './data.json';

//******************************CONSTANTS******************************
const initialData = {
  array: data,
};

//******************************TYPES******************************
const GET_ITEMS_INFO = "GET_ITEMS_INFO";

//******************************REDUCER******************************
export default function itemsReducer(state = initialData, action) {
  switch (action.type) {
    case GET_ITEMS_INFO:
      return {
        ...state,
        array: action.payload.array,
      };

    default:
      return state;
  }
}

//******************************ACTIONS******************************
//Action to get item's list
export const getItemsInfoActions = () => async (dispatch, getState) => {
  try {
    //Usually I used axios here to get data from Endpoint..
    const { array } = getState().items;
    dispatch({
      type: GET_ITEMS_INFO,
      payload: {
        array: array,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
