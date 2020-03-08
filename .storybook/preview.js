import { addParameters } from '@storybook/html';

import '../src/components/Theme/Theme.post.css';
import '../src/components/Theme/_font/Theme_font_default.post.css';
import '../src/components/Theme/_color/Theme_color_default.post.css';
import '../src/components/Theme/_size/Theme_size_default.post.css';

// Icon
import '../src/components/UI/Icon/Icon.post.css';
import '../src/components/UI/Icon/_color/Icon_color_default.post.css';
import '../src/components/UI/Icon/_color/Icon_color_success.post.css';
import '../src/components/UI/Icon/_color/Icon_color_secondary.post.css';
import '../src/components/UI/Icon/_color/Icon_color_warning.post.css';
import '../src/components/UI/Icon/_color/Icon_color_error.post.css';
import '../src/components/UI/Icon/_size/Icon_size_s.post.css';
import '../src/components/UI/Icon/_size/Icon_size_m.post.css';
import '../src/components/UI/Icon/_size/Icon_size_l.post.css';
import '../src/components/UI/Icon/_size/Icon_size_xl.post.css';
import '../src/components/UI/Icon/_size/Icon_size_7xl.post.css';

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