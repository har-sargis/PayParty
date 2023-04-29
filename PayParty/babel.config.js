module.exports = {
 "presets": [
    "module:metro-react-native-babel-preset",
  ],
  "plugins": [
    ["module:react-native-dotenv", { "moduleName": "@env", "path": ".env" }],
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@components': './src/components',
        '@screens': './src/screens',
        '@utils': './src/utils',
        '@config': './src/config',
        '@services': './src/services',
        '@hooke': './src/hooks',
        '@store': './src/store',
        // Add more aliases as needed
      },
    },]
  ],
};
