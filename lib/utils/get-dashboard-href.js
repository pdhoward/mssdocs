export default function getDashboardHref(user, teamSlug) {
  return teamSlug ? `/teams/${teamSlug}` : user ? '/dashboard' : '/'
}
