export function parseDurationTime(time) {
    let totalSeconds = time / 1000
    let totalMinutes = Math.floor(totalSeconds / 60)
    let minutesStr = totalMinutes > 9 ? `${totalMinutes}` : `0${totalMinutes}`
    let chipSeconds = Math.round(totalSeconds % 60)
    let secondsStr = chipSeconds > 9 ? `${chipSeconds}` : `0${chipSeconds}`
    return `${minutesStr}:${secondsStr}`
}