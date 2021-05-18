import Router from 'next/router'
import { format, parse } from 'url'

export default function changeHash(hash) {
  const { pathname, query } = Router
  const parsedUrl = parse(location.href)
  parsedUrl.hash = hash
  Router.router.changeState(
    'replaceState',
    format({ pathname, query }),
    format(parsedUrl)
  )
}
