import React from 'react';
import Ul from './index';

const props = {
  name: 'data',
  data: [
    { comCd: 'A', comCdNm: '첫번재' },
    { comCd: 'B', comCdNm: '두번재' },
  ],
};

const props2 = {
  name: 'data',
  data: [
    { keys: 'A', values: '커스텀키첫번재', _key: 'keys', _value: 'values' },
    { keys: 'B', values: '커스텀키두번재', _key: 'keys', _value: 'values' },
  ],
};

const NoDataProps = {
  name: 'no data',
  data: [],
  nodata: true,
};

export default {
  title: 'Ul',
  component: Ul,
};

export const DataUl = () => <Ul {...props} />;
export const CustomKeyValues = () => <Ul {...props2} />;
export const NoDataUl = () => <Ul {...NoDataProps} />;
