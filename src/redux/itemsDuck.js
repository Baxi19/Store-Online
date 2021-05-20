import data from './data.json';
// Redux Ducks
/* 
Ducks es una forma de modularizar partes de una aplicación de Redux juntando reducers, 
tipos de acciones y creadores de acciones juntos de una forma fácil de entender y portar.
El nombre del formato (ducks) viene de la pronunciación de la última sílaba de Redux en inglés.

Ahorita se esta trabajando con un dummy pero es muy normal utilizar la combinacion de React & Redux
*/

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
    //Usually I used axios here to get data from Endpoint, but now only will return the same array values
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
