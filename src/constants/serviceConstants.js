/**
 * 상수
 */
// 그룹코드
export const GRP_CD = {
  CARD_TYP_CD: '1000', // 카드타입(신용카드, 체크카드)
  REG_STAT_DIV_CD: '1001', // 카드상태(등록중, 카드사용가능, 카드만료)
  FILE_TYP_CD: '1002', // 파일형태(이미지,문서,기타)
  VAT_DIV_CD: '1003', // 세금형태(과세, 비과세)
  CTG_DIV_CD: '1004', // 카테고리타입(기본상품, 브랜드, 테마)
  BIZR_DIV_CD: '1005', // 사업자타입(법인,개인)
  DLVR_DIV_CD: '1006', // 배송형식(택배,화물,배송없음)
  PROD_IMG_DIV_CD: '1007', // 이미지(대표,추가)
  KC_AUTH_DIV_CD: '1008', // KC인증없이 일반상품(구매대행, 안전기준, 관리대상 아님)
  PROD_REG_STAT_DIV_CD: '1009', // 상품 상태
  SALE_MTHD_DIV_CD: '1010', // 상품 판매형식(일반, 사전예약)
  PROD_ORDR_STAT_DIV_CD: '1011', // 상품 주문상태
  PAY_STAT_DIV_CD: '1012', // 상품 결제상태
  DVLR_AMT_DIV_CD: '1026', // 배송금액 구분코드 (무료,유료,개별);
};

// 공통코드
export const CM_COM_CD_SYSTM_ADM = '00010001'; // 시스템 Admin
export const CM_COM_CD_PTN_ADM = '00010002'; // 파트너 Admin
export const CM_COM_CD_PTN = '00010003'; // 파트너
export const CM_COM_CD_GNRL_USER = '00010004'; // 일반 사용자
export const PD_PROD_IMG_DIV_CD = '10070002'; // 이미지 구분 코드,sub
export const PD_PROD_IMG_DIV_CD_MAIN = '10070001'; // 이미지 구분 코드,main
