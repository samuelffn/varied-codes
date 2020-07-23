const fs = require('fs');

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
