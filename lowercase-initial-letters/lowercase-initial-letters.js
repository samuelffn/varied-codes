const fs = require('fs');

function generate(filePath, modelFile) {
    
    fs.readFile(filePath, 'utf8', function (err, data) {
        console.log('Writing file...');
        if (err) {
            return console.log(err);
        }

        let newLine = '';
        const lines = data.split('\n');

        lines.forEach(line => {
            for(i = 0; i < line.length; i++) {
                if (i == 0) newLine += '      ' + line.charAt(0).toLowerCase();
                else if (i+1 == line.length) newLine += line.charAt(i).toLowerCase() + '\n';
                else if (verifyUpper(line[i]) && verifyUpper(line[i+1])) newLine += line.charAt(i).toLowerCase();
                else newLine += line[i];
            }
        });

        fs.writeFile(modelFile, newLine, 'utf-8', function (err) {
            if (err) return console.log(err);
        });
    });
}

generate(__dirname + '/input.txt', __dirname + '/output.txt');

function verifyUpper(letter){
    return letter ? (letter == letter.toUpperCase()) : false;
}

/*
const name = "SamuEl2";
let newName = '';

for(i = 0; i < name.length; i++) {
    if (i == 0 || i+1 == name.length) newName += name.charAt(i).toLowerCase();
    else if (verifyUpper(name[i]) && verifyUpper(name[i+1])) newName += name.charAt(i).toLowerCase();
    else newName += name[i];
}
console.log(newName);
*/
