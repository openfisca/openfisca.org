import ghpages from 'gh-pages';

ghpages.publish(
  'public',
  {
    user: {
      name: 'OpenFisca-Bot',
    },
    branch: 'gh-pages',
    message: 'Auto-commit from master branch',
    dotfiles: true, // Keep .nojekyll
  },
  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  },
);
