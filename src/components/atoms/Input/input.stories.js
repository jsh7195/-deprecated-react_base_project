import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Input from './index';

const inputProps = {
  text: '인풋',
  type: 'text',
};

const checkProps = {
  type: 'checkbox',
};

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const _Input = () => (
  <Input
    {...inputProps}
    onChange={action('Input 입력')}
    placeholder={text('placeholder 입력 테스트', '입력하세요')}
  />
);
export const _Check = () => (
  <Input
    {...checkProps}
    disabled={(action('Checkbox Click'), boolean('Disabled', false))}
  />
);
export const _inputType = () => (
  <Input type={select('Type', ['text', 'date'], 'date', 'inputType')} />
);
