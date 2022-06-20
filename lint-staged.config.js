module.exports = {
  '*.md?(x)': ['eslint --cache --fix'],
  '*.ts?(x)': ['eslint --cache --fix', () => 'tsc -p tsconfig.json --noEmit'],
};
