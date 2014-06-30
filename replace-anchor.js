#!/usr/bin/env node

var
    fs = require('fs'),
    readline = require('readline'),
    stream = require('stream'),
    regex = /(<a href=\")([A-Za-z0-9\(\):\/._-]+)\" target=\"_blank\">([\w\s\.\(\)-]+)(<\/a>)/, // TODO find representation for " target=\_blank\">
    instream = fs.createReadStream('README.md'),
    outstream = new stream,
    rl = readline.createInterface(instream, outstream);

var output = "";

rl.on('line', function(line) {
    var match = regex.exec(line);
    while (match) {
        var markdown = "[" + match[3] + "]" + "(" + match[2] + ")";
        line = line.slice(0, match.index) + markdown + line.slice(match.index + match[0].length);
        match = regex.exec(line);
    }
    output += line + "\n";
});


rl.on('close', function() {
    // remove TOC and installtion notes //
    var indexTOC = output.search("\n-");
    var indexLessonSteps = output.search("# Lesson Steps");
    var header = output.slice(0, indexTOC);
    var body = output.slice(indexLessonSteps);
    output = header + body;

    fs.writeFile('README.md', output, function (err) {
        if (err) throw err;
        console.log('Saved non-github markdown!');
    });
});
