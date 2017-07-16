// Your task is simply to count the total number of lowercase letters in a
// string.

function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}
