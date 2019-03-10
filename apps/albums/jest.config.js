module.exports = {
  name: 'albums',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/albums/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
