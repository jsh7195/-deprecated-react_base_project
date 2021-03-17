import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import styled from 'styled-components';

const CustomDiv = styled.div`
  display: block;
  height: 2rem;
  color: #666;
  text-align: right;
  font-size: 1.2rem;
`;
const Postcode = (props) => {
  const { isPost, setPost, setTradeReturnInfo } = props;

  const customStyles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '50rem',
      marginLeft: '-25rem',
      marginTop: '-23rem',
    },
  };

  const handleComplete = (data) => {
    const setAddress = {};
    setAddress.ltnoAddr = data.address; // 구 주소
    setAddress.stNmAddr = data.roadAddress; // 도로 주소
    setAddress.zpcd = data.zonecode; // 지역번호
    setAddress.userSelectedType = data.userSelectedType; // 유저가 선택한 주소 형태

    setTradeReturnInfo(setAddress);
    setPost(false);
  };

  return (
    <Modal isOpen={isPost} style={customStyles} ariaHideApp={false}>
      <CustomDiv className="closedom txt_r">
        <button type="button" onClick={() => setPost(false)}>
          X
        </button>
      </CustomDiv>
      <DaumPostcode onComplete={handleComplete} />
    </Modal>
  );
};

export default Postcode;
