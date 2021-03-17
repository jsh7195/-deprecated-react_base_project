/**
 * Label
 */
import * as React from 'react';
import 'styled-components';
// import styled from 'styled-components';

const _Label = (props) => {
  const { className, text, forAttr } = props;

  return (
    <label className={className} htmlFor={forAttr}>
      {text}
    </label>
  );
};

export default _Label;
