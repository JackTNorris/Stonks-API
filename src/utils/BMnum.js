//file for converting strings with the B or M for billion or million respectively into numbers
modules.exports = (numString) => {
    if(numString.contains('B')) {
        return +numString.split('B')[0];
    }
    else if(numString.contains('M')) {
        return +numString.split('M')[0];
    }
    else if(numString.contains('K')) {
        return +numString.split('K', 0);
    }
    return +numString;

}