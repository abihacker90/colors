function feladat01(szinek) {

let kombi = [];
let temp = [];
let slent = Math.pow(2, szinek.length); // ketto a szinek hosszan

for (let i = 0; i < slent; i++)
{
    temp = [];
    for (let j = 0; j < szinek.length; j++)
    {
        if ((i & Math.pow(2, j)))
        {
            temp.push(szinek[j]);
        }
    }
    if (temp.length > 0)
    {
        kombi.push(temp);
    }
}

kombi.sort((a, b) => a.length - b.length);
console.log(kombi.length-szinek.length);
return kombi;
}
