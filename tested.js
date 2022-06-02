function email(mail)
{
    pt=mail.lastIndexOf(".");
    console.log(pt);
    aero=mail.indexOf("@");
    console.log(aero);
    if(pt-aero<2)
    return false;
    if(pt>=mail.length-2)
    return false;
return true;

}
console.log(email("khalilgmailc@om"));