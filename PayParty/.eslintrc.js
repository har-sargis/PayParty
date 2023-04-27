module.exports = {
  root: true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  "plugins": ["@typescript-eslint", "react", "react-native"],
  "env": {
    "react-native/react-native": true
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "react-native/no-raw-text": "off",
    "react-native/sort-styles": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
