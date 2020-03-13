export default (number) => {
  if (number % 100 >= 10 && number % 100 <= 20) {
    return `${number}<br> сохранённых статей`;
  } if (number % 10 === 1) {
    return `${number}<br> сохранённая статья`;
  } if (number % 10 === 2 || number % 10 === 3) {
    return `${number}<br> сохранённые статьи`;
  }
  return `${number}<br> сохранённых статей`;
};
