function verifMaj(message)
{
    let first=message.charAt(0);
    return first==message.charAt(0).toUpperCase();
}
//console.log(verifMaj("Hello world"));
function verifFin(message)
{
    return message.endsWith(".");
}
function contenu(message)
{
    if(message.includes("cordialement")||message.includes("amicalement"))
    return true;
    else if(message.includes("CORDIALEMENT")||message.includes("AMICALEMENT"))
    return true;
    else
    return false;
}
function virguleContent(message)
{
    return message.indexOf(",");
}
function veriflength(message)
{
    return message.length>=150 && message.length<=1800;
}
//console.log(verifFin("Hello world"));