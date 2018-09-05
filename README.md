Example Project using eosjs2 and eosjs-ecc on React Native to sign and broadcast transactions. Works on IOS and Android.

Using [rn-nodeify](https://github.com/tradle/rn-nodeify) to enable usage of node libraries.

1. `yarn add polyfill-crypto.getrandomvalues react-native-crypto stream text-encoding`
2. Follow setup instructions in [rn-nodeify](https://github.com/tradle/rn-nodeify)


Adjustments to node_modules

3. In `randombytes/browser.js`, Line 8 is changed to:
`var crypto = { getRandomValues: require('polyfill-crypto.getrandomvalues') }`
4. In `eosjs2/dist/eosjs2-serialize.js` add `require("text-encoding")` on line 30.

