export default (_date) => {
  const date = new Date(_date);
  const dateSplited = date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).split(' ').pop();
  dateSplited[1] += ',';
  return dateSplited.join(' ');
}