var assert=require('assert');
var tab=["a","b","c"];
function diviseValid(b)
{
    return b!=0;
}
function soustraction(a,b)
{
    return a>=b;
}
function difference(x,y)
{
    return x!=y;
}
function parite(p)
{
    return p%2;
}
function verifChaine(ch)
{
    return(ch.length);
}
describe('verification exercice 1',function()
{
it('b doit être # 0 pour faire la division',()=>{
    assert.ok(diviseValid(4))
    // ()=> arrow function ES6
});
it('A doit être plus grand que B',function()
{
    assert.ok(soustraction(15,6));

}
);
it('le nombre de place doit être paire',()=>{
    assert.equal(0,parite(12930));
});
it('la longueur doit être > 1 au moins',()=>
{
    assert.ok(verifChaine("hello ")>0);
}
);
it('le tableau doit contenir au moins deux valeurs',function(){
assert.ok(tab.length>=2);
});
}
)