export default function getAvatarUrl(user, teamId, size) {
  const { avatar: hash, username, uid } = user
  const hasSHA = hash && /^[0-9a-f]{40}$/.test(hash)
  const teamQuery = teamId !== null ? `?teamId=${teamId}` : `${uid}?`
  const userQuery = username === null ? `?u=${username}` : teamQuery
  const query = hasSHA ? hash : userQuery
  const sizeP = hasSHA ? '?' : '&'
  return `https://zeit.co/api/www/avatar/${query + sizeP}s=${size * 3}`
}
