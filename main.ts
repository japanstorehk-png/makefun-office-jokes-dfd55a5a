const joke = "I tried to set up a meeting with my calendar, but it kept asking for a time zone and a coffee order.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const fs = require('fs');
const path = require('path');

const filePath = path.join(outputDir, 'entry.txt');

// Ensure the output directory exists
fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  
  // Write the joke to the file
  fs.writeFile(filePath, joke, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Joke written to', filePath);
    }
  });
});