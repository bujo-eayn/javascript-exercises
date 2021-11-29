const repeatString = function(word, num) {
    let i = 1;
    let wordNew = "";
    if (num === 0) {
        return wordNew;
    }else if (Math.sign(num) === 1) {
        do {
            i = i + 1;
            wordNew = wordNew + word;
            // return wordNew;
        } while (i <= num);
        return wordNew;
        
    }
    else{
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
