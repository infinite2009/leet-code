const removeK = (num, k) => {
    let result = num;
    let kCopy = k;
    if (result === '' || result.length <= kCopy) {
        return '0';
    }
    if (kCopy === 0) {
        result = result.replace(/^0+/, '');
        if (result === '') {
            return '0';
        }
        return result;
    }
    for (let i = 0, l = result.length; i < l; i++) {
        if (i === l - 1) {
            result = result.slice(0, i);
            return removeK(result, --kCopy);
        }
        if (result[i] - result[i + 1] > 0) {
            result = result.slice(0, i) + result.slice(i + 1);
            return removeK(result, --kCopy);
        }
    }
};

const str = '112'; // 1000543210
const k1 = 1;

console.log(removeK(str, k1));
