module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals" : {
    window: true,
  },
  "plugins": [
    'html'
  ],
  "rules" : {
    "padded-blocks": 0,
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
  },
};
