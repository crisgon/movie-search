const formatMoney = money =>
  `$ ${money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
export default formatMoney;
