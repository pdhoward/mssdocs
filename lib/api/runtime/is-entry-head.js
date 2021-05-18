import { pathOr } from 'ramda'

export default function isEntryHead(child) {
  return pathOr(undefined, ['props', 'name'], child) === 'h3'
}
