import { configure } from '@storybook/react';

function loadStories() {
  require('../src/ReactHeader/stories');
}

configure(loadStories, module);
