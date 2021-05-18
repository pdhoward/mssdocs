import isMainSectionHead from './is-main-section-head'
import createBuildMainSection from './build-main-section'

export default function build(children, content = [], structure = []) {
  const [child, ...rest] = children || []

  if (!child) {
    return { content, structure }
  }

  if (isMainSectionHead(child)) {
    const buildMainSection = createBuildMainSection(child.props.children)
    const [mainSection, remaining] = buildMainSection(rest, [child])
    return build(
      remaining,
      [...content, mainSection.content],
      [...structure, mainSection.structure]
    )
  }

  return rest.length !== 0
    ? build(rest, [...content, child], structure)
    : { content, structure }
}
