/**
 * Li
 */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const _Ul = (props) => {
  const { data, nodata } = props;

  return (
    <ul>
      {data && !_.isEmpty(data) && data.length > 0 ? (
        data.map((item) => {
          if (item._key && item._value) {
            return <li value={item[item._key]}>{item[item._value]}</li>;
          } else {
            return <li value={item.comCd}>{item.comCdNm}</li>;
          }
        })
      ) : (
        <>{nodata ? <li>데이터가 존재하지 않습니다.</li> : ''}</>
      )}
    </ul>
  );
};

export const CtgUl = (props) => {
  const { data, nodata, onClick, lvl, setSelectCtgPath } = props;
  const [selected, setSelected] = useState();
  return (
    <ul className="ctgr_box" key={`leaf-ctgul-${lvl}`}>
      {data && !_.isEmpty(data) && data.length > 0 ? (
        data.map((item) => {
          return (
            <li key={item.ctgId}>
              <Link
                to=""
                className={`ctgr_item ${item.ctgId === selected ? 'on' : ''}`}
                value={item.ctgId}
                onClick={() => {
                  onClick(item.ctgId, lvl, item.leafYn);
                  setSelected(item.ctgId);
                  setSelectCtgPath(item.ctgPathNm.replaceAll('&gt;', '>'));
                }}
              >
                {item.ctgNm}
              </Link>
            </li>
          );
        })
      ) : (
        <>{nodata ? <li>데이터가 존재하지 않습니다.</li> : ''}</>
      )}
    </ul>
  );
};

export const MenuUl = (props) => {
  const { lv1, lv2, nodata } = props;
  const [clickedMenu, setClickedMenu] = useState();

  return (
    <ul className="navi_1depth">
      {lv1 && !_.isEmpty(lv1) && lv1.length > 0 ? (
        lv1.map((item, i) => {
          const target = _.filter(lv2, (idx) => idx.uprMenuId === item.menuId);
          return (
            <li key={`menu-${i}`}>
              <Link
                to=""
                className={`gnb_item_1  ${
                  clickedMenu === item.menuId ? 'on' : ''
                }`}
                onClick={() => {
                  setClickedMenu(item.menuId);
                }}
              >
                {item.menuNm}
                <i
                  className={`ico_arrow ${
                    clickedMenu === item.menuId ? 'show' : 'hide'
                  }`}
                />
              </Link>
              <ul
                className={`navi_2depth ${
                  clickedMenu === item.menuId ? 'dsp_block' : ''
                }`}
              >
                {target.map((index, i2) => {
                  return (
                    <li key={`menuli-${i2}`}>
                      <Link to={index.menuUrl} className="gnb_item_2">
                        {index.menuNm}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })
      ) : (
        <>{nodata ? <li>데이터가 존재하지 않습니다.</li> : ''}</>
      )}
    </ul>
  );
};

export default _Ul;
