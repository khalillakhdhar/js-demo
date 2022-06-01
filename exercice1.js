function factoriel(x)
{
    var f=1;
    for(let i=2;i<=x;i++)
    {
        f*=i;
        // f=f*i => f*=i;
    }
    console.log("la factoriel de "+x+" est : "+f)



}
function sommePaire(x,y)
{
    let somme=0;
    for(let i=x;i<=y;i++)
    {
        if(i%2==0)
        somme+=i;
    }
console.log("la somme des élément paires de l'intervalle est: "+somme)

}
function premier(p)
{
if(p<2)
return false;

    for(let i=2;i<=Math.sqrt(p);i++)
    if(p%i==0)
    return false;
return true;



}


factoriel(6);
sommePaire(3,10)
if(premier(16))
console.log("l'entier est premier");
else
console.log("l entier n'est pas premier");
