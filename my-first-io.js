const fs=require('fs')
const buf=fs.readFileSync(process.argv[2]) //process.argv[2] = path file // sync: wait of read the file so Block!
const str = buf.toString()                 // convert to string the buffer data 
console.log(str.split('\n').length-1)      // count nbr of lines 