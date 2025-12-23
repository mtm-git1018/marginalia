export function getMonth(date) {
  if (!date) return
  
  const dateObj = new Date(date)
  if (isNaN((dateObj.getTime()))) return null
  
  return dateObj.getMonth() + 1
}