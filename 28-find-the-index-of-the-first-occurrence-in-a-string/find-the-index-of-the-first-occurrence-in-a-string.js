/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //If haystack doesn't include needle, return -1;
    if(!haystack.includes(needle)){
        return -1;
    }
    else{
        //Haystack does include needle, return the first index of the occurence.
        return haystack.indexOf(needle);
    }
};