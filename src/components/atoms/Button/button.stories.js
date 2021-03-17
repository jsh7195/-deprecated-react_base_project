import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './index';

const yellowProps = {
  text: '주황색버튼',
  color: 'yellow',
};

const redProps = {
  text: '빨간버튼',
  color: 'red',
};

// const clickEvt = (e) => {
//   alert('클릭이벤트');
// };

const options = {
  red: 'red',
  yellow: 'yellow',
  None: null,
};

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const yellowButton = () => (
  <Button {...yellowProps} onClick={action('clickEvt')} />
);
export const redButton = () => (
  <Button {...redProps} onClick={action('clickEvt')} />
);
export const colorSelectButton = () => (
  <Button
    text="버튼"
    color={select('Color Change', options, 'None', 'Color Group1')}
  />
);
