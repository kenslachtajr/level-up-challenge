module.exports = {
  name: 'pga-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pga-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
