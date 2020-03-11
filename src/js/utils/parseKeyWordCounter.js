export default (number) => {
  if (number % 100 === 11 || number % 10 !== 1) {
    return `${number} другим`;
  }
  return `${number} другому`;
};
