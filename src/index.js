module.exports = function check(str, bracketsConfig) {
    let bracketsArr = bracketsConfig.map(item => item.join(''));
    let edStr = str;
    let result = false;

    let index = 0;
    while (index < bracketsArr.length) {
        if (edStr.includes(bracketsArr[index])) {
            edStr = edStr.replace(bracketsArr[index], '');
            index = -1;
        }
        index++;
    }

    if (edStr == '') result = true;

    return result;
}
