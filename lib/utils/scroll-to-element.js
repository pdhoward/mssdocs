export default function scrollToElement(container, element) {
  const sidebarBounds = container.getBoundingClientRect()
  const entryBounds = element.getBoundingClientRect()
  const overflowsTop = sidebarBounds.top > entryBounds.top
  const overflowsDown =
    sidebarBounds.top + sidebarBounds.height <
    entryBounds.top + entryBounds.height

  if (overflowsDown) {
    container.scrollTop += entryBounds.top - sidebarBounds.height
  } else if (overflowsTop) {
    container.scrollTop -= sidebarBounds.top - entryBounds.top
  }
}
