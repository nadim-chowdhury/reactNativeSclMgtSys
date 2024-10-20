// module.exports = {
//   root: true,
//   // extends: '@react-native',
// };

module.exports = {
  root: true,
  env: {
    es6: true, // Enable ES6+ features
    node: true, // Enable Node.js global variables like module, require, etc.
    'react-native/react-native': true, // React Native-specific environment
  },
  parserOptions: {
    ecmaVersion: 2021, // or latest, specify the ECMAScript version you are using
    sourceType: 'module', // Enable ES Modules (import/export)
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-native/all',
  ], // Use React and React Native plugins
  plugins: ['react', 'react-native'], // Enable React and React Native linting
  rules: {
    // Custom rules can be added here
  },
};
