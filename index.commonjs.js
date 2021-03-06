'use strict'

var React = require('react')

var createRef = function createRef() {
  // Moved `React.createRef` inside the function
  // because `React.createRef` might be a "frozen" property
  // which means adding `.default` to it might throw an error.
  if (React.createRef) {
    return React.createRef()
  }
  var ref = function(_) { ref.current = _ }
  ref(null)
  return ref
}

exports = module.exports = createRef
exports['default'] = createRef
