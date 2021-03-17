/**
 * Input
 */
import * as React from 'react';
import styled from 'styled-components';

const _Input = (props) => {
  const {
    className,
    onChange,
    onClick,
    type,
    value,
    maxLength,
    id,
    name,
    minLength,
    placeholder,
  } = props;

  const Input = styled.input.attrs({
    placeholder: placeholder || '내용을 입력하세요.',
  })``;

  return (
    <>
      <Input
        type={type}
        className={className}
        id={id}
        name={name}
        defaultValue={value || ''}
        onClick={onClick}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
      />
    </>
  );
};

export default _Input;
