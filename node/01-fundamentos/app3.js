
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ');

//const wordReactCount = wordCount.filter(word => word.toLowerCase().includes('react'));

const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Palabras: ' + wordCount.length);

console.log('Palabras react: ' + reactWordCount);