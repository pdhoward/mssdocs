import { Component } from 'react'
import CategoryIndex from './category-index'

class DocsIndex extends Component {
  renderCategory = category => {
    return (
      <CategoryIndex
        key={category.slug}
        category={category}
        activeItem={this.props.activeItem}
        onEntryActive={this.props.onEntryActive}
        onSectionActive={this.props.onSectionActive}
        getHref={this.props.getHref}
        onClickLink={this.props.onClickLink}
        updateActive={this.props.updateActive}
        setInitiallyActive={this.props.setInitiallyActive}
      />
    )
  }

  render() {
    return (
      <div className="wrapper">
        <ul>{this.props.structure.map(this.renderCategory)}</ul>
        <style jsx>{`
          .wrapper {
            padding: 12px 0;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default DocsIndex
