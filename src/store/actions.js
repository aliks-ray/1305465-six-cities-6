export const ActionType = {
  SET_CITY: `main/set-sity`,
  CHANGE_SORTING: `sorting/changeSorting`
};

export const setCity = (cityName) => ({
  type: ActionType.SET_CITY,
  payload: cityName
});

export const changeSorting = (sorting) => ({
  type: ActionType.CHANGE_SORTING,
  payload: sorting
});
