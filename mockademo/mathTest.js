var assert=require('assert'); // importation des assertion js
describe('Math',function() // titre de la suite des testes
{
    it('Devrait tester si 3*3 = 9',function()
    // it(message,callback)
    {
        assert.equal(9,3*3);
    }
    );
    it('Devrait tester si (3–4)*8 = -8',function()
    {
        assert.equal(-8,(3-4)*8);
    }
    );
}


)