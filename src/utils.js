export function secondToMinutesAndSeconds(sec) {
  let minutes = Math.floor(sec / 60)
  let seconds = sec % 60
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

export function compareUser(user1, user2) {
  if (user2.score < user1.score) {
    return -1
  } else if (user2.score === user1.score) {
    if (user1.time < user2.time) return -1
  }
  return 1
}

export function shuffleArr(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}
