export default function getSection(pathname) {
  return pathname
    .split('/')
    .slice(0, 2)
    .join('/')
}
