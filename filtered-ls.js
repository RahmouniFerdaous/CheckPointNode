var fs=require('fs');
const ext= process.argv[3].toString()
fs.readdir(process.argv[2],(err,list)=>{
    if (err) throw err
    list.map(el=>el.split('.')[1]=== ext ? console.log(el) :null  )
})