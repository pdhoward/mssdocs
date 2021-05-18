import { pathOr } from 'ramda'

export default function isWrapper(child, allChildren) {
  return (
    pathOr(undefined, ['props', 'name'], child) === 'wrapper' ||
    (allChildren.length === 1 && child.type === 'div')
  )
}
