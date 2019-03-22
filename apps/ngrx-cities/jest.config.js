module.exports = {
  name: 'ngrx-cities',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-cities/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
