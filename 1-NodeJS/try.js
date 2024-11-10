const { readFileSync } = require('fs');

try {
    const first = readFileSync('D:\Work\Backend\nodejs\content\first.txt', 'utf8');
    const second = readFileSync('./content/second.txt', 'utf8');
    console.log(first, second);
} catch (error) {
    console.error("Error reading files:", error);
}
