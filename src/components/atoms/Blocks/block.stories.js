import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import FileUploadBlock from './FileUploadBlock';
import DaumPost from './DaumPost';

export default {
  title: 'Block',
  component: FileUploadBlock,
  decorators: [withKnobs],
};
export const FileUpload = () => <FileUploadBlock />;
export const _DaumPost = () => <DaumPost />;
