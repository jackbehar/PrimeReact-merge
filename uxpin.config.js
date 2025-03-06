module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/Card/Card.jsx',
          'src/components/Checkbox/Checkbox.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  settings: { useUXPinProps: true, useConvertingToUXPinClassic: true },
  name: 'ShadCN Design System',
};
