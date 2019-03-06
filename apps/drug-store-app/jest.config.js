module.exports = {
  name: 'drug-store-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/drug-store-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
