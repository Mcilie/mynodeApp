var nml = require('./index.js');
 //.matrix.Matrix([[2,3],[1,4]]); //nml([[2,3],[4,5]]);//.Matrix([[4,5],[2,3]]);
var q = new nml.matrix.Matrix([[3,4],[5,8]]);
console.log(q.isValidMatrix());