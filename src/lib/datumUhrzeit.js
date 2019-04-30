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

  return `${parseISOString(date).toLocaleDateString('de-DE', options)} Uhr`
}

function parseISOString(s) {
  const b = s.split(/\D+/)
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
}