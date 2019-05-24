export function getDateTime(date) {
  return formatDate(date)
}

export function getTime(date) {
  return formatDate(date).split(',')[2]
}

export function getDate(date) {
  return formatDate(date).split(',')[1]
}

export function getWeekDay(date) {
  return formatDate(date).split(',')[0]
}

function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }

  // Wenn ISO String Uhrzeit hat
  return `${new Date(date).toLocaleDateString('de-DE', options)} Uhr`
}
