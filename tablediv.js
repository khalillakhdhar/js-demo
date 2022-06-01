function verifvaleur(valeur)
{
    // soit valeur 351
    let c=Math.floor(valeur/100); // 3
    //console.log("centaine ",c);
    let u= valeur %10; // 1
    //console.log("unité",u); 
    let d=Math.floor((valeur%100)/10); //5
    //console.log("disaine",d);
    let res=c+u+d;
    if(res%3==0 && valeur %2==0)
    return true;
    else 
    return false
}
function affichediv(tab)
{
    for(let i of tab)
    {
        if(verifvaleur(i))
        console.log(i);
    }
}
//console.log("divisible par 2 et 3 ", verifvaleur(102));
const tab=[122,132,366,285,102,321];
affichediv(tab);

