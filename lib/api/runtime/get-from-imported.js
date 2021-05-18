import { Children } from 'react'

export default function getFromImported(child) {
  return Children.toArray(child.type({}))
}
