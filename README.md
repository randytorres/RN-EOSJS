Using [rn-nodeify](https://github.com/tradle/rn-nodeify) to enable usage of node libraries.

1. Follow setup instructions in [rn-nodeify](https://github.com/tradle/rn-nodeify)


Adjustments to node_modules

2. In `randombytes/browser.js`, Line 8 is changed to:
`var crypto = { getRandomValues: require('polyfill-crypto.getrandomvalues') }`
3. In `eosjs2/dist/eosjs2-serialize.js` add `require("text-encoding")` on line 30.

