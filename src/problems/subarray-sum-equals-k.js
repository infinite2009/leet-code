const testSubArraySumEqualsK = (nums, k) => {
    let result = 0;
    for (let i = 0, l = nums.length; i < l; i++) {

        let sum = 0;
        for (let j = i; j < l; j++) {
            // 如果不相等，继续累加，直到最后一个元素
            sum += nums[j];

            if (sum === k) {
                result++;
            }
        }
    }
    return result;
};

const nums = [0,0,0,0,0,0,0,0,0,0];
const k = 0;

console.log(testSubArraySumEqualsK(nums, k));
