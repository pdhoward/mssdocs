import { isEmpty, pathOr } from 'ramda'

export default function isImported(child) {
  const props = pathOr({}, ['props'], child)
  const childProps = pathOr({}, ['props'], getType(child))
  return isEmpty(props) && childProps.name
}

function getType(child) {
  try {
    return child.type({})
  } catch (error) {
    return {}
  }
}
