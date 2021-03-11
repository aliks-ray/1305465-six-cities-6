export const ActionType = {
  SET_CITY: `main/set-sity`
};

export const setCity = (cityName) => ({
  type: ActionType.SET_CITY,
  payload: cityName
});
