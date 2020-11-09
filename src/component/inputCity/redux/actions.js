export const INPUT_CITY = "[ORDER] ADD_CITY";

export function addCity(city) {
  return { type: INPUT_CITY, payload: city };
}
