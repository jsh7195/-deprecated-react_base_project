/* eslint-disable guard-for-in */
import axios from 'axios';
// import { getLocal } from './common';

/**
 * axios Header
 */
const header = () => {
  return {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${getLocal('token')}`,
    Authorization: `Bearer eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.KBISaAO5Gcwj0QjPC-EKASGskI94RghtU2WrmtcMtXqZFFp8uKaQegG8-EDANUfukScDI4GNaIVdO24E31HW1QyaIJZqJSGei6_AV9NGiBw5OCAKPMO7Kx7HJyWuzN_6jUWrKwIa2ImdMsOP4qzwSLhE4LlIWO579FQl2uQ9MF4CsqssaXxZsGyWwJ9bE5pbj06Eb2NtLSKHZmqyXa7UjoJF234fy8c1AuppXkzz4BiiwMze6-u3kaFXNh4J8_NJuPJUa6nAt9d1zoWrAY0cN_Yp6RjQbZClm-A2WbA0xbNMr1uH7bO3jIxwc_XLJchKF5lZxnrJkL3cUDPc32anQA._3mlbmNoEp2zxbmJ.DEbKZ1YnZqDFswRus_-HOmpvMHAYZeQOCcArWeMK1lZiAsnnfTyiumbofzQn6OynrysXykZFZwAe8HJB3dHDWq7ut_s2C-ZOFQ1kvBBJNSeM2PjWSruvQ6C5KeH7JZvHB1YG-_g3HrX1FGF10erLwakek5BhQ1I43UoIa-vgyHKPZQg.v5DxmZWgd-lOauoKXQ6_-A`,
    // TODO - 인증
  };
};

/**
 * axios Call 공통
 * @param {*} url
 * @param {*} params
 * @param {*} method
 */
const toAxios = (url, params, method) => {
  const options = {
    headers: header(),
    url,
  };

  if (!method) {
    options.method = 'get';
  } else {
    options.method = method;
  }

  if (options.method === 'get') {
    options.params = params;
  } else {
    options.data = params;
  }

  return axios(options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        // 200범위를 벗어난 에러 응답인 경우
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청을 했지만 응답을 못받은 경우
        console.log(error.request);
      } else {
        // 요청 자체가 문제인 경우
        console.log(error.message);
      }

      console.log(error.config);
    });
};

export const product = {
  getProductList(params) {
    return toAxios('/PD/product/lst', params, 'post');
  },

  getProductDetail(prodId) {
    return toAxios(`/PD/product/${prodId}`);
  },

  postProductReg(data) {
    return toAxios('/PD/product', data, 'post');
  },

  ProductMod(data) {
    return toAxios('/PD/product', data, 'put');
  },

  modifyOriginProduct(data) {
    return toAxios(`/PD/product/${data.prodId}`, data, 'put');
  },

  getProductStatus() {
    return toAxios('/PD/product/sts');
  },
  // 삭제 , param : list
  putProduct(params) {
    return toAxios('/PD/product', params, 'put');
  },
  // 상태 변경 , param : list
  putProductStat(params) {
    return toAxios('/PD/product/stat', params, 'put');
  },
};

export const file = {
  /**
   * POST /upload/temp
   * Temp 파일 업로드
   * @param {*} params
   * @returns {response}
   */
  postTempFileUpload(params) {
    return toAxios('/CM/upload/temp', params, 'post');
  },

  getImgView(fileDtlSrno) {
    return toAxios(`/CM/upload/img/${fileDtlSrno}`);
  },
};

export const user = {
  /**
   * POST /login
   * 유저 로그인 요청
   * @param {*} params
   * @returns {response}
   */
  getLoginUserInfo(params) {
    return toAxios('/CM/login/auth', params, 'post');
  },
};

export const code = {
  getCodeListByGrpCd(grpCd) {
    return toAxios(`/CM/common/code/${grpCd}`);
  },
};

export const ctg = {
  /**
   * GET /ctg
   * 카테고리 목록 호출
   */
  getCtgList(params) {
    return toAxios('/PD/ctg', params);
  },

  getCtgByKeyword(ctgNm) {
    return toAxios(`/PD/ctg/${ctgNm}`);
  },

  getBrndByCtg(ctgId) {
    return toAxios(`/PD/ctg/brnd/${ctgId}`);
  },

  getThemeCtgList() {
    return toAxios('/PD/ctg/theme');
  },
};
