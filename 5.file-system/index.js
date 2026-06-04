const fs = require('fs');
const path = require('path'); 

const datafolder = path.join(__dirname, 'data'); // this is for joining the path 

if(!fs.existsSync(datafolder)) {
    fs.mkdirSync(datafolder); // this is for create the folder of datafolder 
    console.log('data folder created'); 
}

const filepath = path.join(datafolder, 'data.txt'); // this is for joining the path of data.txt
fs.writeFileSync(filepath, 'Hello, this is a data file.'); // this is for writing the data in the file of data.txt
console.log('Data file created and written successfully.'); 

const readcontentfromfile = fs.readFileSync(filepath, 'utf-8'); // this is for reading the data from the file of data.txt
console.log('Content read from file:', readcontentfromfile); // this is for printing the data read from the file of data.txt


fs.appendFileSync(filepath, '\nThis line is appended to the data file.'); // this is for appending the data in the file of data.txt
const updatedcontentfromfile = fs.readFileSync(filepath, 'utf-8'); // this is for reading the data from the file of data.txt
console.log('Updated content read from file:', updatedcontentfromfile); // this is for printing the data read from the file of data.txt 

// Async way of creating a file and writing data in it 
const asyncfilepath = path.join(datafolder, 'asyncdata.txt'); // this is for joining the path of asyncdata.txt
fs.writeFile(asyncfilepath, 'Hello, this is an async data file.', (err) => {
    if(err) throw err; 
    console.log('Async data file created and written successfully.');

    fs.readFile(asyncfilepath, 'utf-8', (err, data) => {
        if(err) throw err; 
        console.log('Content read from async file:', data); 
    }); 

    fs.appendFile(asyncfilepath, '\nThis line is appended to the async data file.', (err) => {
        if(err) throw err; 
        console.log('Async data file updated successfully.');
    
        fs.readFile(asyncfilepath, 'utf-8', (err, data) => {
            if(err) throw err; 
            console.log('Updated content read from async file:', data); 
        }); 
    }); 
}); 