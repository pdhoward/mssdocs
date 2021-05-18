import { Children } from 'react'

export default function filterReactChildren(children, predicate) {
  if (children) {
    const result = []

    Children.forEach(children, (entry, idx) => {
      if (predicate && predicate.call(this, entry, idx)) {
        result.push(entry)
      }
    })
    return result
  }

  return []
}
