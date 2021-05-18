import { pathOr } from 'ramda'

export default function isSectionHead(child) {
  return pathOr(undefined, ['props', 'name'], child) === 'h2'
}
