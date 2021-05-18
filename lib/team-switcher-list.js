export default (teams, user, team, { sort = true } = {}) => {
  const teamId = team ? team.id : null

  const mappedList = [
    {
      uid: user.uid,
      username: user.username,
      displayName: user.username || user.email,
      avatar: user.avatar
    },
    ...teams.map(t => {
      return {
        teamId: t.id,
        teamSlug: t.slug,
        displayName: t.name,
        avatar: t.avatar
      }
    })
  ]

  if (!sort) return mappedList

  return mappedList.sort((a, b) => {
    if (a.teamId == teamId) return -1
    if (b.teamId == teamId) return 1

    return (a.displayName || '').localeCompare(b.displayName || '')
  })
}
