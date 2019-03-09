module.exports = {
  name: 'piano-brands',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/piano-brands/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
