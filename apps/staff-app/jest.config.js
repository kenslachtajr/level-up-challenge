module.exports = {
  name: 'staff-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/staff-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
