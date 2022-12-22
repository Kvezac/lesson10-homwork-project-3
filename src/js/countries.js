/* countries.js */
/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
  const optionArray = ['<option value="" disabled>Please select country</option>',];
  for (const country of countries) {
    optionArray.push(
      `<option value="${country.toLowerCase()}">${country}</option>`
    );
  }
  return optionArray;
}
