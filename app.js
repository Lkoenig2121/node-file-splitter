const fs = require('fs');
const csv = require('csv-parser');
         
const inputFile = '/Users/lukaskoenig/Documents/node-file-splitter/index.csv';
const outputFolder = 'output-folder';
const rowsPerFile = 5;
         
const spitCsv = (inputFile, outputFolder, rowsPerFile) => {
    if(!fs.existsSync(outputFolder)){
        fs.mkdirSync(outputFolder);
    }
}

    let fileNumber = 10