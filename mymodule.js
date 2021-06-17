var fs=require('fs');
const extension= process.argv[3];
const directory=process.argv[2];
const filter=fs.readdir(directory,(err,list)=>{
    if (err) throw err
    list.map(el=>el.split('.')[1]=== extension ? console.log(el) :null  )
})
const myfunction=(directory,filter,callback)=>{} // arrow function that takes 3 arguments 
module.exports=myfunction; // module file exports my function that can be re-used at other files
                           // module.exports typically like export default on frontEnd