module.exports = {
  name: 'ngrx-albums',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-albums/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
