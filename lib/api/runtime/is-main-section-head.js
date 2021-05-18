import { pathOr } from 'ramda'

export default function isMainSectionHead(child) {
  return pathOr(undefined, ['props', 'name'], child) === 'h1'
}
