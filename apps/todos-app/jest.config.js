module.exports = {
  name: 'todos-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todos-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
