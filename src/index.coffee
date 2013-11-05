helmsman = require 'helmsman'

cli = helmsman
  localDir: 'bin'
  prefix: 'freshbooks'
  usePath: true

cli.on '--help', ->
  console.log "\nfreshbooks - Command-line interface to the FreshBooks API"
  console.log "\nFor detailed usage, view \"man freshbooks\"."

argv = process.argv

cli.parse(argv)
