const fs = require("fs");

// Async require callback which take err int write but in read it take err and result
//Sync does not require callback we can store the result in a variable but not in the async.

//Async
fs.writeFile("./text.txt", "Hello from async", (err) => {});

//Sync
fs.writeFileSync("./text.txt", "Hello form sync");

// Read sync
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

//Read async
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});

// Append sync
fs.appendFileSync("./text.txt", `\n${Date.now()} Hey there\n`);
