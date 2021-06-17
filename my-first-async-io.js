const fs=require('fs')
fs.readFile(process.argv[2],'utf8',(err,data)=>{ // async: dont wait reading the file so No-Block!
   
        if (err) throw err;
        console.log(data.split('\n').length-1);
     
})