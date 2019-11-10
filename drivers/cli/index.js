const args = require('yargs-parser')(process.argv.slice(2))

const printHelp = function () {
  // eslint-disable-next-line no-console
  console.log(`
    Help usage:
    --create  Create User with all the details
    --auth    Login using Username and Password
    --help   print help
  `);
}
const valid = args.create || args.auth

if (args.help || !valid) {
  printHelp()
  process.exit(1)
}

// eslint-disable-next-line no-empty
if (args.create) {
}

