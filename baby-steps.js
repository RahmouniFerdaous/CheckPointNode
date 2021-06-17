let sum=0;
var n=process.argv.length
for (let i=2;i<n;i++){
   sum=sum+Number(process.argv[i])
}
console.log(sum)