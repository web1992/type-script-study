const events = require('events');
const fs = require('fs');
const readline = require('readline');


const lineSet = new Set();
const fileName = '/Users/manfen/Downloads/CGSH-CGDD60230603001-1-17482847.json';

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream(fileName),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            // console.log(`Line from file: ${line}`);
            lineSet.add(line);
        });

        await events.once(rl, 'close');

        // console.log('Reading file line by line with readline done.');
        // const used = process.memoryUsage().heapUsed / 1024 / 1024;
        // console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    } catch (err) {
        console.error(err);
    }
}

processLineByLine().then(logLines);

function logLines() {
    console.log("lineSet");
    lineSet.forEach(doLine)
}

function doLine(line) {

}
