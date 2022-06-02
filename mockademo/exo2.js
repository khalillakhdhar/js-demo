var assert=require('assert');
function testPoid(poid)
{
    if(poid>30&&poid<200)
    return true;
    else
    return false;
}
function testTaille(taille)
{

    return taille>0.8 && taille<2.6;

}
function verifGl(glycemie)
{
    return glycemie>0.5 && glycemie<2;
}
describe('teste de santé générale',()=>
{
    it('teste de la taille valide',()=>{
        assert.ok(testTaille(1.8))
    })
    it('teste de poid',function()
    {
        assert.ok(testPoid(82));
    });
    describe('teste de glycémie',()=>
    {
        it('la valeur de 0.5< GL <2  ',()=>{
            assert.ok(verifGl(1.2));
        })
    })
}

)