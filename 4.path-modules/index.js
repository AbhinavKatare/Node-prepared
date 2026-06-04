const path = require("path"); 

console.log("Directory name:", path.dirname(__filename));

console.log("file name:", path.basename(__filename)); // this is for getting the file name with extension and for getting the file name without extension we can use path.basename(__filename, path.extname(__filename))

console.log("file extension:", path.extname(__filename)); // this is for getting the file extension

const joinPath = path.join("node", "learn", "C", "Nodelearn", "4.path-modules", "index.js"); // this is for joining the path
console.log("Joined path:", joinPath); 

const resolvepath = path.resolve("node", "learn", "C", "Nodelearn", "4.path-modules", "index.js"); // this is for resolving the path
console.log("Resolved path:", resolvepath); 

const normalizePath = path.normalize("node//learn///C/Nodelearn/4.path-modules/index.js"); // this is for normalizing the path
console.log("Normalized path:", normalizePath); 