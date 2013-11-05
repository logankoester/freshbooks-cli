(function() {
  var argv, cli, helmsman;

  helmsman = require('helmsman');

  cli = helmsman({
    localDir: 'bin',
    prefix: 'freshbooks',
    usePath: true
  });

  cli.on('--help', function() {
    console.log("\nfreshbooks - Command-line interface to the FreshBooks API");
    return console.log("\nFor detailed usage, view \"man freshbooks\".");
  });

  argv = process.argv;

  cli.parse(argv);

}).call(this);
