/* const fs = require('fs');

function generate(filePath, modelFile) {
    console.log('>>> Start...');
    
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        let model = '';
        const lines = data.split('\n');

        console.log(err);

        lines.forEach(line => {
            line = line.substring(0, 1).toLowerCase() + line.substring(1);
            let attribute = '      ' + line + '\n';
            model += attribute;
        });

        fs.writeFile(modelFile, model, 'utf-8', function (err) {
            if (err) return console.log(err);
        });
    });
    console.log('>>> Stop');
}

generate(__dirname + '/input.txt', __dirname + '/output.txt');
 */

const name = "SamUel";
//let letter = name.charAt(0);
let newName = '';

let beforeLower = false;
for(i = 0; i < name.length; i++) {
    if ((verifyUpper(name[i]) && !verifyUpper(name[i+1])) && !beforeLower) {
        newName += name.charAt(i).toLowerCase();
        beforeLower = true;
    } else if ((verifyUpper(name[i]) && !verifyUpper(name[i+1])) && !beforeLower) {
        newName += name.charAt(i).toLowerCase();
        beforeLower = true;
    } {
        console.log(name[i]);
        newName += name[i];
        beforeLower = false;
    }
}
console.log(newName);

function verifyUpper(letter){
    //console.log(letter);
    return letter ? (letter == letter.toUpperCase()) : false;
}


