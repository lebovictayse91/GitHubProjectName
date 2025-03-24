// Node.js script to count the occurrences of each word in a given string

const fs = require('fs');
const { readFileSync } = require('fs').promises;

function countWordOccurrences(text) {
  const words = text.split(/\s+/);
  return new Set(words).size;
}

try {
  let inputFilePath = './your-project-name.txt';
  const inputContent = readFileSync(inputFilePath, 'utf8');
  const outputFile = './wordCount.log';

  fs.writeFileSync(outputFile, countWordOccurrences(inputContent));
} catch (error) {
  console.error('Failed to write to the log file:', error);
}
