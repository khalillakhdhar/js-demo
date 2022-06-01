var assert = require('assert'); // importer la library des assertion node js

function max(a,b)
{
    if(a>b)
    return a;
    else return b;
}


// créer un titre de la suite des tests (Array)
describe('Array', function() {
    // pour créer un sous titre pour Array (#indexOf())
describe('#indexOf()', function() {
    // it('message') => un message pour guider le dev (facultatif)
    // it('message',function) => function va être évaluer
it('should return -1 when the value is not present', function(){
assert.equal(-1, [1,2,3].indexOf(4)); // equal pour comparer les type simple (not equal inversement)
});
it('verif OK',function(){
    assert.ok(1<3); // ok pour les booléenne
});
it('second verification',function()
{
    assert.deepEqual([1,2,3],[4,5,8]); // deepEqual(array,array) => compare deux objet itérable
})
it('last verification',function()
{
    assert.deepEqual([1,2,3],[1,2,3]); // deepEqual(array,array) => compare deux objet itérable
})
});
 });




 describe("test2",function()
 {
    it('it should return the greater value between a and b',
    function(){
        assert.equal(2,max(2,6));
    }
    )
 }
 )