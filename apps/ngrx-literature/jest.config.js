module.exports = {
  name: 'ngrx-literature',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-literature/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
