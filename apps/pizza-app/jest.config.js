module.exports = {
  name: 'pizza-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pizza-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
