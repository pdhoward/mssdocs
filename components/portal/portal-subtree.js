import { Component } from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtree
} from 'react-dom'

class PortalSubtree extends Component {
  childRootNode = null

  componentDidMount() {
    this.renderChildren()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.childRootNode && nextProps.container !== this.props.container) {
      getContainer(this.props.container).removeChild(this.childRootNode)
      getContainer(nextProps.container).appendChild(this.childRootNode)
    }
  }

  componentDidUpdate() {
    this.renderChildren()
  }

  componentWillUnmount() {
    this.unmount()
  }

  renderChildren() {
    const children = this.props.children

    if (children !== null) {
      const childRootNode = this.getOrCreateChildRootNode()

      if (this.props.className) {
        childRootNode.className = this.props.className
      }

      if (this.props.parentId) {
        childRootNode.setAttribute('data-origin-id', this.props.parentId)
      }

      renderSubtree(this, children, childRootNode)
    } else {
      this.unmount()
    }
  }

  getOrCreateChildRootNode() {
    if (!this.childRootNode) {
      this.childRootNode = document.createElement('div')
      getContainer(this.props.container).appendChild(this.childRootNode)
      if (this.props.onMount) {
        this.props.onMount()
      }
    }

    return this.childRootNode
  }

  unmount() {
    if (this.childRootNode) {
      unmountComponentAtNode(this.childRootNode)
      getContainer(this.props.container).removeChild(this.childRootNode)
      this.childRootNode = null
      if (this.props.onUnmount) {
        this.props.onUnmount()
      }
    }
  }

  render() {
    return null
  }
}

function getContainer(container) {
  return container || document.body
}

export default PortalSubtree
