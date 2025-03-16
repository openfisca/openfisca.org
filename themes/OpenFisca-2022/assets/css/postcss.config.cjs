const themeDir = `${__dirname}/../../`;

module.exports = {
  plugins: [
    require('postcss-mixins')({mixinsFiles: [`${themeDir}assets/css/mixins.css`]}),
    require('autoprefixer')({path: [themeDir]}),
    require('postcss-preset-env')({
      path: [themeDir],
      stage: 1,
    }),
    require('postcss-extend')({path: themeDir}),
  ],
};
