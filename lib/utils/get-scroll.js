import isClient from './is-client'

export default function getViewport() {
  if (!isClient()) {
    return {}
  }

  return {
    scrollX: window.scrollX,
    scrollY: window.scrollY
  }
}
