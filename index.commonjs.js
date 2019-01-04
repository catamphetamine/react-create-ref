var React = require('react')

module.exports = {
  default: React.createRef || function createRef() {
    var ref = function(_) { ref.current = _ }
    ref(null)
    return ref
  }
};
