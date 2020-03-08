import { addParameters } from '@storybook/html';

import '../src/components/Theme/Theme.post.css';
import '../src/components/Theme/_font/Theme_font_default.post.css';
import '../src/components/Theme/_color/Theme_color_default.post.css';
import '../src/components/Theme/_size/Theme_size_default.post.css';

addParameters({
  themes: [
    {
      name: 'yandex',
      class: [
        'Theme',
        'Theme_font_default',
        'Theme_color_default',
        'Theme_size_default',
      ],
      color: '#FFCC00',
      default: true
    },
  ],
});