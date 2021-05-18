import getFragment from './get-fragment'

export default function getHref(slugs) {
  return {
    href: `#${getFragment(slugs)}`,
    as: `#${getFragment(slugs)}`
  }
}
