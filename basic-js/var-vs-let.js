var a = 20,
  b = 10;
{
  let tmp1 = a; //let keyword is block-scoped and cannot be accessed outside like var
  a = b;
  b = tmp;
}
console.log(tmp1); // ReferenceError

var a = 20,
  b = 10;
{
  var tmp = a; //let keyword is block-scoped and cannot be accessed outside like var
  a = b;
  b = tmp;
}
console.log(tmp); // 20
