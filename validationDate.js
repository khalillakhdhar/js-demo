function verifAnnee(a)
{
    return a>1900;
    // return true if a>1900
}
function verifMois(m)
{
    if(m>0 && m<=12 )
    return true;
    else 
    return false;
}
function bisextile(a)
{
    if(a%4==0 && a%10!=0)
    return true;
    else
    return    false;
}
function verifJours(j,m,a)
{
    if(j<1|| j>31)
    return false;
    if(!verifAnnee(a)|| !verifMois(m))
    return false;
  var shortMonth=[4,6,9,11];
    if(shortMonth.includes(m))
    {
        console.log("short");
        if(j<=30)
        return true;
        else 
        return false;
    }
    else if(m==2)
    {
        if(bisextile(a))
        {
            console.log("bisextile");
            if(j<=29)
            return true;
            else 
            return false;
        }
        else
        {
            console.log("non bisextile");
            if(j<=28)
            return true;
            else 
            return false;
        }

    }
    else
    {
        console.log("long");
        if(j<=31)
        return true;
        else
        return false;
    }
}

if(verifJours(31,2,2004))
console.log("evaluation de date: ","date valide");
else
console.log("évaluation de date: ","date invalide");