import moment from 'moment';

export const isEmpty = (data) => {
  if (
    data === null ||
    data === 'null' ||
    undefined === data ||
    data === 'undefined' ||
    data === ''
  ) {
    return true;
  }

  return false;
};

/**
 * 1000단위 콤마 반환
 * @param num {*}
 * @returns {string}
 */
export const numComma = (num) => {
  if (isEmpty(num)) {
    return '';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 오늘날짜 반환
 * @returns {string}
 */
export const momentToday = () => {
  return moment().format('YYYYMMDD');
};

/**
 * 기간에 따른 이전 날짜 반환
 * period -> year, month, day
 * @param period {string}
 * @param ago {number}
 * @returns {string}
 */
export const momentDate = (period, ago) => {
  return moment().subtract(ago, period).format('YYYYMMDD');
};

export const momentLater = (date, period, type) => {
  return moment(date).add(period, type).format('YYYYMMDD');
};

export const momentDateFormat = (date, format) => {
  return moment(date).format(format);
};

/**
 * mix, max 지정 랜덤 반환
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export const rangeRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

// Map 형태 state 변경
export const cmmSetState = (state, setState, _key, value) => {
  setState({
    ...state,
    [_key]: value,
  });
};

export const checkboxHandler = (state, setState, _key, id, checked) => {
  let arr = _.cloneDeep(state[_key]);

  if (!arr) {
    arr = [];
  }

  if (checked) {
    arr.push(id);
  } else {
    arr = _.filter(arr, (item) => {
      return item !== id;
    });
  }

  setState({
    ...state,
    [_key]: arr,
  });
};

export const setLocal = (key, item) => {
  if (key) {
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    console.error('Key가 존재하지 않습니다');
  }
};

export const getLocal = (key) => {
  if (key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : '';
  } else {
    console.error('Key가 존재하지 않습니다');
  }
};

export const delLocal = (key) => {
  if (key) {
    localStorage.removeItem(key);
  } else {
    console.error('Key가 존재하지 않습니다');
  }
};
