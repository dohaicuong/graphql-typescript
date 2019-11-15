export default () => {
  const termSignals: NodeJS.Signals[] = [ 'SIGHUP', 'SIGINT', 'SIGTERM' ]
  const signals = {
    'SIGHUP': 1,
    'SIGINT': 2,
    'SIGTERM': 15
  }

  termSignals.forEach(signal => {
    process.on(signal, () => {
      console.log(`process received a ${signal} signal`)
      console.log(`exitting...`)
      process.exit(1)
    })
  })
}