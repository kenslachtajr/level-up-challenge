module.exports = {
  name: 'employees-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/employees-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
