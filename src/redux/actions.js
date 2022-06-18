export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const toogleFavourite = (pokemon) => ({
  type: TOGGLE_FAVOURITE,
  payload: pokemon,
});
