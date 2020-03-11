export default (number) => {
  if (number % 100 >= 10 && number % 100 <= 20) {
    return `${number}<br> сохраненных статей`;
  } if (number % 10 === 1) {
    return `${number}<br> сохраненная статья`;
  } if (number % 10 === 2 || number % 10 === 3) {
    return `${number}<br> сохраненные статьи`;
  }
  return `${number}<br> сохраненных статей`;
};
