//file for converting strings with the B or M for billion or million respectively into numbers
modules.exports = (numString) => {
    if(numString.includes('B')) {
        return +numString.split('B')[0];
    }
    else if(numString.includes('M')) {
        return +numString.split('M')[0];
    }
    else if(numString.includes('K')) {
        return +numString.split('K', 0);
    }
    return +numString;

}