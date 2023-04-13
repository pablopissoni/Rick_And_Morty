export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER";
export const ORDER_CARDS = "ORDER"

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character, // falta asignar esta variable
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id, //! HAY QUE verificar
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender
  }
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order
  }

}
