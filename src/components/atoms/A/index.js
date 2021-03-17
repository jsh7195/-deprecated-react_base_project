import React from 'react';
import styled from 'styled-components';
import Button from '@atoms/Button';

const _A = (props) => {
  const { type, onClick, disabled, className, text, toggle, href } = props;

  const AStyle = styled.a`
    background: ${!toggle ? '#F6F6F6' : '#F5A623'};
    border: ${!toggle ? '1px solid #E9EBED' : '1px solid #F5A623'};
    display: inline-block;
    width: 33px;
    line-height: 28px;
    text-align: center;
    font-size: 13px;
    color: #666;
    border-radius: 2px 2px;
    margin-right: 1.8px;
    margin-top: 4px;
  `;
  return (
    <>
      <AStyle
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
        href={href}
      >
        {text}
        <Button />
      </AStyle>
    </>
  );
};

export default _A;
