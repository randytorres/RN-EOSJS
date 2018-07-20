Using rn-nodeify to enable usage of node libraries. https://github.com/tradle/rn-nodeify
Requires we run `rn-nodeify --install --hack`

Adjustments to node_modules

In `randombytes/browser.js` we use a polyfill for window.crypto.getRandomValues. Line 8 is changed to :
`var crypto = { getRandomValues: require('polyfill-crypto.getrandomvalues') }`

In `eosjs2/dist/eosjs2-serialize.js` we use a polyfill for `TextEncoder` and `TextDecoder`. I added `require("text-encoding")` on line 30.