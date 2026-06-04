const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const modifyFile = data.toUpperCase();
    fs.writeFile('output.txt', modifyFile, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been modified and saved successfully.');
    });
    
}); 

