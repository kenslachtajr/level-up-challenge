module.exports = {
  name: 'jazz-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jazz-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
