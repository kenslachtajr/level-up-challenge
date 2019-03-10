module.exports = {
  name: 'operas',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/operas/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
