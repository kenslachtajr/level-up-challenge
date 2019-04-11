module.exports = {
  name: 'ngrx-star-wars',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx-star-wars/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
