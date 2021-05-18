import { Children } from 'react'
import getFromImported from './get-from-imported'
import getFromWrapped from './get-from-wrapped'
import isImported from './is-imported'
import isWrapper from './is-wrapper'

export default function flattenTree(children) {
  return Children.toArray(children).reduce((prev, child, idx, array) => {
    if (isImported(child)) {
      return [...prev, ...flattenTree(getFromImported(child))]
    } else if (isWrapper(child, array)) {
      return [...prev, ...flattenTree(getFromWrapped(child))]
    } else {
      return [...prev, child]
    }
  }, [])
}
