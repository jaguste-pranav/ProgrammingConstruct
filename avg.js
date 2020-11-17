let total = 0;
let avg = 0;
for (let i = 0; i<10; i++)
{
    let newVar = Math.floor(Math.random() * 10);
    total = total + newVar;
    console.log("New Number: "+newVar);
}
avg = total/10;

console.log("Total: "+total+", Avg: "+avg)