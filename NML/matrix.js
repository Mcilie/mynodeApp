//var method = Matrix.prototype;


module.exports.Matrix = function Matrix(arrayOfNums) {
    this.matrix =arrayOfNums
}


module.exports.Matrix.prototype.isValidMatrix = function () {
    var x = null;
    for(var i =0; i<this.matrix.length; i++){
        newX = this.matrix[i].length;
        if (newX !== x && x !== null){
            return false;
        }
        x = newX;
    }   
    return true;
}

/*method.getColCount = function() {
    return this.matrix[0].length
};*/

//module.exports = Matrix;