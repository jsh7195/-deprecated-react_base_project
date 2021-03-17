/**
 * Select
 */
import * as React from 'react';
import 'styled-components';

const _Select = (props) => {
  const { className, name, data, nodata, onChange, _key, _value } = props;

  return (
    <select
      name={name}
      className={className}
      onChange={onChange}
      disabled={data ? '' : 'disalbed'}
    >
      <option value="">선택하세요</option>
      {data && !_.isEmpty(data) && data.length > 0 ? (
        data.map((item) => {
          if (_key && _value) {
            return (
              <option value={item[_key]} key={item[_key]}>
                {item[_value]}
              </option>
            );
          }
          return (
            <option value={item.comCd} key={item.comCd}>
              {item.comCdNm}
            </option>
          );
        })
      ) : (
        <>{!nodata ? <option>데이터가 존재하지 않습니다.</option> : ''}</>
      )}
    </select>
  );
};

export default _Select;
