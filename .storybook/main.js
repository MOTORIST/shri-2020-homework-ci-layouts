const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    'storybook-addon-themes',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.resolve(__dirname)
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  }
};
