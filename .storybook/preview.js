import { addParameters } from '@storybook/html';

// Theme
import '../src/components/Theme/Theme.post.css';
import '../src/components/Theme/_font/Theme_font_default.post.css';
import '../src/components/Theme/_color/Theme_color_default.post.css';
import '../src/components/Theme/_size/Theme_size_default.post.css';
import '../src/components/Theme/_space/Theme_space_default.post.css';
import '../src/components/Theme/_control/Theme_control_default.post.css';

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

// Button
import '../src/components/UI/Button/Button.post.css';

import '../src/components/UI/Button/_color/Button_color_default.post.css';
import '../src/components/UI/Button/_color/Button_color_primary.post.css';

import '../src/components/UI/Button/_size/Button_size_s.post.css';
import '../src/components/UI/Button/_size/Button_size_m.post.css';

import '../src/components/UI/Button/_icon/Button_icon_left.post.css';
import '../src/components/UI/Button/_icon/Button_icon_only.post.css';
import '../src/components/UI/Button/_icon/Button_icon_clear.post.css';

import '../src/components/UI/Button/_full/Button_full.post.css';

import '../src/components/UI/Button/Icon/Button-Icon.post.css';
import '../src/components/UI/Button/Text/Button-Text.post.css';

// Link
import '../src/components/UI/Link/Link.post.css';

// Input
import '../src/components/UI/Input/Input.post.css';

import '../src/components/UI/Input/_size/Input_size_s.post.css';
import '../src/components/UI/Input/_size/Input_size_m.post.css';

import '../src/components/UI/Input/_full/Input_full.post.css';

import '../src/components/UI/Input/_clearable/Input_clearable.post.css';

import '../src/components/UI/Input/Control/Input-Control.post.css';
import '../src/components/UI/Input/ClearButton/Input-ClearButton.post.css';
import '../src/components/UI/Input/ClearIcon/Input-ClearIcon.post.css';

// FormGroup
import '../src/components/UI/FormGroup/FormGroup.post.css';

import '../src/components/UI/FormGroup/_row/FormGroup_row.post.css';

import '../src/components/UI/FormGroup/Label/FormGroup-Label.post.css';
import '../src/components/UI/FormGroup/Label/_required/FormGroup-Label_required.post.css';

import '../src/components/UI/FormGroup/Hint/FormGroup-Hint.post.css';

// Icon Plus
import '../src/components/UI/IconPlus/IconPlus.post.css';

import '../src/components/UI/IconPlus/Content/IconPlus-Content.post.css';
import '../src/components/UI/IconPlus/_distance/IconPlus_distance_xs.post.css';

// Code
import '../src/components/UI/Code/Code.post.css';

// Typography

import '../src/components/UI/Typography/Typography.post.css';

import '../src/components/UI/Typography/_variant/Typography_variant_h1.post.css';
import '../src/components/UI/Typography/_variant/Typography_variant_h2.post.css';
import '../src/components/UI/Typography/_variant/Typography_variant_h3.post.css';
import '../src/components/UI/Typography/_variant/Typography_variant_h4.post.css';
import '../src/components/UI/Typography/_variant/Typography_variant_body.post.css';

import '../src/components/UI/Typography/_color/Typography_color_success.post.css';
import '../src/components/UI/Typography/_color/Typography_color_error.post.css';
import '../src/components/UI/Typography/_color/Typography_color_warning.post.css';
import '../src/components/UI/Typography/_color/Typography_color_neutral.post.css';

import '../src/components/UI/Typography/_nowrap/Typography_nowrap.post.css';

addParameters({
  themes: [
    {
      name: 'yandex',
      class: [
        'Theme',
        'Theme_font_default',
        'Theme_color_default',
        'Theme_size_default',
        'Theme_space_default',
        'Theme_control_default',
      ],
      color: '#FFCC00',
      default: true
    },
  ],
});