module.exports = {
  extends: 'standard',
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'no-console': [2, {
      'allow': ['warn', 'error']
    }],
    'no-new': 1,
    'valid-jsdoc': [2, {
      requireReturn: false,
      prefer: {
        return: 'returns'
      }
    }]
  }
}
