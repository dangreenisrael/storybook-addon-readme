import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { ReactHeader } from './.';
import { withReadMe} from "../../../../src";
import readme from './readme.md';

storiesOf('Welcome', module)
  // .addDecorator(withReadMe(readme))
  .add('to Storybook', () => <ReactHeader />);
