module.exports = {
  name: 'ngrx-pokemon',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-pokemon/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
