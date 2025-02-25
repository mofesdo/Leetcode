/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0){
        return 0;
    }
    for(let i = 1; i <= x; i++){
        //If it is the exact root, return i
        if((i * i) == x){
            return i;
        }
        //If i^2 is greater than x, return the previous number
        if(i * i > x){
            return i - 1;
        }
    }
};