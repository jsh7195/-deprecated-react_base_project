import React from 'react';
import styled from 'styled-components';

const _Button = (props) => {
  const { type, onClick, disabled, className, text, color } = props;

  // 버튼 Backgroun color
  const backgroundColorType = {
    yellow: '#f60',
    red: '#f22',
  };

  const ButtonStyle = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${backgroundColorType[color]};
    border-radius: 15px 15px;
  `;

  return (
    <ButtonStyle
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
};

export default _Button;
