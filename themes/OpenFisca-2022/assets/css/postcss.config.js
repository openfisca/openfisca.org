const themeDir = __dirname + '/assets/css';

module.exports = {
  plugins: [
    require('postcss-mixins')({
      mixinsFiles: themeDir + '/mixins.css',
    }),
    require('postcss-import')({
      path: themeDir,
    }),
    require('postcss-preset-env')({
      path: themeDir,
      stage: 1,
    }),
    require('postcss-extend')({
      path: themeDir,
    }),
  ],
};
