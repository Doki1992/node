suite('"field Name" Page Tests', function(){
test('page shoult contain a field for name', function(){
assert($('input[type="text"]').length);});
});


suite('"field pass" Page Tests', function(){
test('page shoult contain a field for name', function(){
assert($('input[type="password"]').length);});
});