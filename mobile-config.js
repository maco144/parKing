// basic info
App.info({
  name: 'parKing',
  description: 'park',
  author: 'Alex Roche',
});

// CORS for Meteor app
App.accessRule('meteor.local/*');
// allow tiles
App.accessRule('*.openstreetmap.org/*');
App.accessRule('*.tile.thunderforest.com/*');
