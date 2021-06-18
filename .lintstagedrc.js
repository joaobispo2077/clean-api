module.exports = {
  'src/**/*.(ts|js)': [
    'prettier --write',
    'eslint --fix',
    'git add -A'
  ],
}
