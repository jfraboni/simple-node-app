#!/usr/bin/env node

var
    fs = require('fs'),
    readline = require('readline'),
    stream = require('stream'),
    regex = /(<a href=\")([A-Za-z0-9:\/._-]+)\" target=\"_blank\">([\w\s]+)(<\/a>)/, // TODO find representation for " target=\_blank\">
    instream = fs.createReadStream('READ.md'),
    outstream = new stream,
    rl = readline.createInterface(instream, outstream);

var output = "";

rl.on('line', function(line) {
    var match = regex.exec(line);
    while (match) {
        output += line.slice(0, match.index);
        output += "[" + match[3] + "]" + "(" + match[2] + ")";
        line=line.slice(match.index+match[0].length);
        match = regex.exec(line);

        if (!match) {
            output += line + "\n\n";
        }

    }
});

rl.on('close', function() {
    console.log("output: " + output);

    fs.writeFile('README.md', output, function (err) {
        if (err) throw err;
        console.log('Saved non-github markdown!');
    });
});
