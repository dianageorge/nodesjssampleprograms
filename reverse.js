var a=243
var b=0

while (a!=0)
{
    b=b*10
    b=b+(a%10)
    a=parseInt(a/10)


}

console.log(b)