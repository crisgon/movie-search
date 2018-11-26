const formatDate = date =>
  date
    .split('-')
    .reverse()
    .join('/');
export default formatDate;
