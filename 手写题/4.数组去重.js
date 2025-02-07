// 1. 使用 Set
// function uniqueArray(arr) {
//     return [...new Set(arr)]
// }

// 使用map存储不重复的数字
function uniqueArray(arr) {
    let map = {}
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.hasOwnProperty(arr[i])) {
            map[arr[i]] = 1
            res.push(arr[i])
        }
    }
    return res
}

// 使用 reduce
// function uniqueArray(arr) {
//     return arr.reduce((accumulator, current) => {
//         if (!accumulator.includes(current)) {
//             accumulator.push(current);
//         }
//         return accumulator;
//     }, []);
// }


const array = [1, 2, 3, 4, 4, 3, 2, 1];
const unique = uniqueArray(array);
console.log(unique); // 输出: [1, 2, 3, 4]