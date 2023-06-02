const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  overrides: [
    {
      files: '*.json',
      options: {
        indent_size: 2,
      },
    },
  ],
};
