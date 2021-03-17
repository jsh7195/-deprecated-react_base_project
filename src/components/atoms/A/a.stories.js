import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import A from './index';

export default {
  title: 'A',
  component: A,
  decorators: [withKnobs],
};

export const toggleA = () => (
  <A
    toggle={select('토글', [true, false], true, 'Toggle_A')}
    text="a태그 토글"
  />
);
