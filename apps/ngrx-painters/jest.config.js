module.exports = {
  name: 'ngrx-painters',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-painters/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
