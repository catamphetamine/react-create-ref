import createRef from './index'

// Test ES6 export.
// Old React.
let ref = createRef()
ref(123)
if (ref.current !== 123) {
  throw new Error()
}

// Test CommonJS export.
// Old React.
const library = require('./index.commonjs')

ref = library.default()
ref(456)
if (ref.current !== 456) {
  throw new Error()
}

// Legacy import.
// (maybe not needed anymore)
ref = library()
ref(789)
if (ref.current !== 789) {
  throw new Error()
}
