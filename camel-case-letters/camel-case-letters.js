const fs = require('fs');

function generate(filePath, modelFile) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        let model = '';
        const lines = data.split('\n');

        lines.forEach(line => {
            for(i = 0; i < line.length; i++) {
                if (i == 0) model += '      ' + line.charAt(0).toLowerCase(); //'      ' +} 
                else if (i+1 == line.length) model += line.charAt(i).toLowerCase() + '\n'; //': String\n'
                //else if (i+1 == line.length && verifyUpper(line[i+1])) model += line[i]; //': String\n'
                else if (verifyUpper(line[i]) && verifyUpper(line[i+1]) && !verifyUpper(line[i-1])) model += line[i];
                else if (verifyUpper(line[i]) && verifyUpper(line[i+1])) model += line.charAt(i).toLowerCase();
                else if (verifyUpper(line[i]) && !verifyUpper(line[i+1]) && verifyUpper(line[i-1]) && verifyUpper(line[i-2])) model += line[i];
                else if (verifyUpper(line[i]) && !verifyUpper(line[i+1]) && verifyUpper(line[i-1])) model += line.charAt(i).toLowerCase();
                else model += line[i];
            }
        });

        console.log('Writing file...');

        fs.writeFile(modelFile, model, 'utf-8', function (err) {
            if (err) return console.log(err);
        });
    });
}

generate(__dirname + '/text.txt', __dirname + '/result-generated.txt');

function verifyUpper(letter){
    return letter ? (letter == letter.toUpperCase()) : false;
}
