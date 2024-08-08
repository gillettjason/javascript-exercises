const removeFromArray = function (array, ...arrayItemsToRemove) {
    let sortedArray = array;

    for (let i = 0; i < arrayItemsToRemove.length; i++) {
        console.log(arrayItemsToRemove[i]);
        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray.includes(arrayItemsToRemove[i])) {
                let index = sortedArray.indexOf(arrayItemsToRemove[i]);
                console.log(index);
                sortedArray.splice(index, 1);
            }
        }
    }
    console.log(sortedArray);
    return sortedArray;
}
// Do not edit below this line
// removeFromArray([1, 2, 2, 3, 3], 2)
module.exports = removeFromArray;
