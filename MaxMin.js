let num1, num2, num3;
let max, min;

function GetMaximumNumber(no1, no2, no3)
{
    if(no1>=no2 && no1>=no3)
    {
        max = no1;
    }
    if(no2>=no1 && no2>=no3)
    {
        max = no2;
    }
    if(no3>=no2 && no3>=no1)
    {
        max = no3;
    }
    if(no3==no2 && no3==no1)
    {
        max = no3;
    }
    console.log("The max number is "+max);
}

function GetMinimumNumber(no1, no2, no3)
{
    if(no1<=no2 && no1<=no3)
    {
        min = no1;
    }
    if(no2<=no1 && no2<=no3)
    {
        min = no2;
    }
    if(no3<=no2 && no3<=no1)
    {
        min = no3;
    }
    if(no3==no2 && no3==no1)
    {
        min = no3;
    }
    console.log("The min number is "+min);
}

GetMaximumNumber(1,2,3);
GetMaximumNumber(3,1,2);
GetMaximumNumber(1,3,2);
GetMaximumNumber(1,3,3);
GetMaximumNumber(3,3,3);

console.log("\n");
GetMinimumNumber(1,2,3);
GetMinimumNumber(3,1,2);
GetMinimumNumber(1,3,2);
GetMinimumNumber(1,3,3);
GetMinimumNumber(3,3,3);
