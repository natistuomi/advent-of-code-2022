const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input_calories.txt'), 'utf-8');