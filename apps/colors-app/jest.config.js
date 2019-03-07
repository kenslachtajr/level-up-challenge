module.exports = {
  name: 'colors-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/colors-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
