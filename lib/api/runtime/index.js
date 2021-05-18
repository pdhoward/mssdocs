import { Component } from 'react'
import PropTypes from 'prop-types'
import flattenTree from './flatten-tree'
import build from './build'

export default class BuiltDocs extends Component {
  static propTypes = {
    children: PropTypes.func,
    docs: PropTypes.node
  }

  tree = build(flattenTree(this.props.docs))

  render() {
    return this.props.children(this.tree)
  }
}
