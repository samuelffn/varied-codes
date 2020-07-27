const fs = require('fs');

function generate(filePath, modelFile) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        let model = '';
        const lines = data.split('\n');

        lines.forEach(line => {
            line = line.substring(0, 1).toLowerCase() + line.substring(1);
            let attribute = '      ' + line + '\n';
            model += attribute;
        });

        console.log('Writing file...');
        fs.writeFile(modelFile, model, 'utf-8', function (err) {
            if (err) return console.log(err);
        });
    });
}

generate(__dirname + '/text.txt', __dirname + '/result-generated.txt');
