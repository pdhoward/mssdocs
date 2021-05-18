import cns from 'classnames'
import { Component, Fragment } from 'react'
import SectionIndex from './section-index'
import * as metrics from '~/lib/metrics'

class CategoryIndex extends Component {
  renderSection = section => {
    return (
      <SectionIndex
        key={section.slug}
        getHref={this.props.getHref}
        onEntryActive={this.props.onEntryActive}
        onSectionActive={this.props.onSectionActive}
        onClickLink={this.props.onClickLink}
        category={this.props.category}
        activeItem={this.props.activeItem}
        section={section}
        updateActive={this.props.updateActive}
        setInitiallyActive={this.props.setInitiallyActive}
      />
    )
  }

  handleClick = () => {
    const { category } = this.props
    metrics.event({
      action: 'sidebar_category_clicked',
      category: 'engagement',
      label: category.title
    })

    this.props.updateActive({
      category: category.slug
    })
    this.props.onClickLink()
  }

  render() {
    const { category, getHref } = this.props
    const active = isCategoryActive(this.props)
    const { href, as } = getHref({
      category: category.slug
    })
    return (
      <li>
        {href ? (
          <Fragment>
            {href.startsWith('#') ? (
              <a
                className={cns('title', { active })}
                onClick={this.handleClick}
                ref={this.handleRef}
                href={as || href}
              >
                {category.title}
              </a>
            ) : (
              <span>{category.title}</span>
            )}
          </Fragment>
        ) : (
          <span>{category.title}</span>
        )}
        <ul>{category.sections.map(this.renderSection)}</ul>
        <style jsx>{`
          li {
            margin-bottom: 40px;
          }

          span,
          a {
            color: #888;
            display: inline-block;
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 1.3px;
            margin-bottom: 8px;
            text-decoration: none;
            text-transform: uppercase;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .active {
            color: #000;
            font-weight: 500;
          }
        `}</style>
      </li>
    )
  }
}

function isCategoryActive({ category, activeItem }) {
  return activeItem.category === category.slug
}

export default CategoryIndex
