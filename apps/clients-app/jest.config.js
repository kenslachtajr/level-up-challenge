module.exports = {
  name: 'clients-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/clients-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
