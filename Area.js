function getArea(len, brd)
{
    let lengthInInch = len*12;
    let breadthInInch = brd*12;
    let areaInSqInch = lengthInInch+breadthInInch;
    console.log("Length of plot in inch " + lengthInInch + " Breadth of plot in inch " + breadthInInch);
    console.log("Area: "+areaInSqInch);
    console.log("\n");
}

for(let plotNo = 0; plotNo< 25; plotNo++)
{
    let lengthinFoot = Math.floor(Math.random() * 10);
    let breadthinFoot = Math.floor(Math.random() * 10);
    console.log("Length of plot in ft " + lengthinFoot + " Breadth of plot in ft " + breadthinFoot);
    getArea(breadthinFoot, breadthinFoot);
}