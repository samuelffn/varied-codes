/**
 * Copyright (c) 2020 Samsung Electronics Co., Ltd.
 * All rights reserved.
 *
 * This software is a confidential and proprietary information of Samsung
 * Electronics, Inc. ("Confidential Information").  You shall not disclose such
 * Confidential Information and shall use it only in accordance with the terms
 * of the license agreement you entered into with Samsung Electronics.
 */

const fs = require('fs');

function generate(filePath, modelFile) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        let model = '';
        const lines = data.split('\n');

        lines.forEach(line => {
            if (line.trim() !== '') {
                for (i = 0; i < line.length; i++) {
                    if (i == 0) model += 'public ' + line.charAt(0).toLowerCase();
                    else if (i + 1 == line.length)
                        model += line.charAt(i).toLowerCase() + ': string;\n\n';
                    else if (
                        i == 1 &&
                        verifyUpper(line[i]) &&
                        !verifyUpper(line[i + 1])
                        )
                        model += line[i];
                    else if (
                        verifyUpper(line[i]) &&
                        verifyUpper(line[i + 1]) &&
                        !verifyUpper(line[i - 1])
                    )
                        model += line[i];
                    else if (verifyUpper(line[i]) && verifyUpper(line[i + 1]))
                        model += line.charAt(i).toLowerCase();
                    else if (
                        verifyUpper(line[i]) &&
                        !verifyUpper(line[i + 1]) &&
                        verifyUpper(line[i - 1]) &&
                        verifyUpper(line[i - 2])
                    )
                        model += line[i];
                    else if (
                        verifyUpper(line[i]) &&
                        !verifyUpper(line[i + 1]) &&
                        verifyUpper(line[i - 1])
                    )
                        model += line.charAt(i).toLowerCase();
                    else model += line[i];
                }
            }
        });

        model += `---  TO JSON --- \n\n`;

        lines.forEach(line => {
            if (line.trim() !== '') {
                let newModel = '';
                for (i = 0; i < line.length; i++) {
                    if (i == 0) newModel += line.charAt(0).toLowerCase();
                    else if (i + 1 == line.length)
                        newModel += line.charAt(i).toLowerCase() + ',\n';
                    else if (
                        i == 1 &&
                        verifyUpper(line[i]) &&
                        !verifyUpper(line[i + 1])
                    )
                        newModel += line[i];
                    else if (
                        verifyUpper(line[i]) &&
                        verifyUpper(line[i + 1]) &&
                        !verifyUpper(line[i - 1])
                    )
                        newModel += line[i];
                    else if (verifyUpper(line[i]) && verifyUpper(line[i + 1]))
                        newModel += line.charAt(i).toLowerCase();
                    else if (
                        verifyUpper(line[i]) &&
                        !verifyUpper(line[i + 1]) &&
                        verifyUpper(line[i - 1]) &&
                        verifyUpper(line[i - 2])
                    )
                        newModel += line[i];
                    else if (
                        verifyUpper(line[i]) &&
                        !verifyUpper(line[i + 1]) &&
                        verifyUpper(line[i - 1])
                    )
                        newModel += line.charAt(i).toLowerCase();
                    else newModel += line[i];
                }
                model += ` ${line}: this.${newModel}`;
            }
        });

        fs.writeFile(modelFile, model, 'utf-8', function (err) {
            if (err) return console.log(err);
        });
    });
}

generate(
    __dirname + '/model.txt',
    __dirname + '/request-body-generated-model.txt',
);

function verifyUpper(letter) {
    return letter ? letter === letter.toUpperCase() : false;
}