var fs=require('fs');
// process.argv is an array which the first two values are reserved for system info by Node.
const directory=process.argv[2];
const extension= process.argv[3];
fs.readdir(directory,(err,list)=>{ //readdir prints all the files under a folder directory
    if (err) throw err
    list.map(el=>el.split('.')[1]=== extension ? console.log(el) :null  ) // map list of files and split by (.)
    // "README.md" => ['README' 'md'] => 'README' indice=0 'md' indice=1 
})