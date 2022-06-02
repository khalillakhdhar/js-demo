function verifNom(nom)
{
    return nom.length>=3;
}
function checkpassword(password,nom)
{
    if(password.length<8)
    return false;
    if(password.includes(nom))
    return false;
    let nbs=["0","1","2","3","4","5","6","7","8","9"];
    for(let element of nbs)
    {if(password.includes(element))
    return true;
    }
return false;

}
function validateEmail(mail)
{
indexpoint=mail.lastIndexOf(".");
console.log(indexpoint);
indexat=mail.indexOf("@");
console.log(indexat);
if(indexat!=mail.lastIndexOf("@"))
return false;
if(indexpoint==-1 || indexat==-1)
{
    return false;
}
if(mail.length-indexpoint<=3)
return false;
if(indexpoint-indexat<=2)
return false;
return true;

}
//