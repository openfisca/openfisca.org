import ghpages from 'gh-pages';

let message = 'Publish latest changes from ';
message += process.env.CIRCLE_SHA1 ?
  'openfisca/openfisca.org@' + process.env.CIRCLE_SHA1 :
  'openfisca.org contents';

ghpages.publish(
  'public',
  {
    user: {
      name: 'OpenFisca Bot',
      email: 'bot@openfisca.org',
    },
    branch: 'gh-pages',
    message: message,
    dotfiles: true, // Keep .nojekyll
  },
  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  },
);
