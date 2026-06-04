const fs = require("fs");


function person(name, callbackfn) {
    console.log(`hello ${name}`);
    callbackfn();
}

function address(){
    console.log("India");
} 

person("Abhi", address) 

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("file error", err);
    } else {
        console.log(data);
    }
})

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("file error", err);
        return; 
    } else {
        console.log(data);
    }
})

