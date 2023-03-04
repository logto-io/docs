module.exports = {
  '*.md?(x)': ['eslint --cache'],
  '*.ts?(x)': ['eslint --cache --fix', () => 'tsc -p tsconfig.json --noEmit'],
};
